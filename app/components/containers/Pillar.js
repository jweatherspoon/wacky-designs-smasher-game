/**
 * @file Pillar component for displaying in game
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Dimensions, AsyncStorage } from 'react-native';

import {
    displayGameOver,
    updateHighScore,
    incrementScore,
    deactivatePillar,
    incrementPlayerCurrency,
    decrementPlayerLives
} from '../../redux/actions';

const windowHeight = Dimensions.get('window').height;

const minHeight = 20;
const maxHeight = windowHeight - minHeight - 20;
const dropStep = maxHeight / 25;

/**
 * Handles rendering a pillar in the game 
 * @class 
 */
class Pillar extends Component {

    state = {
        height: 20,
        animation: null,
        updateInterval: null,
        colliding: false
    }

    componentDidMount() {
        this.setState({
            updateInterval: setInterval(this.update, 10)
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.updateInterval);
        clearInterval(this.state.animation);
    }

    update = () => {
        let thisPillar = this.props.pillars[this.props.id];
        if(thisPillar.active && this.props.ticks >= thisPillar.fallsOn) {
            this.drop();
        }
    }

    drop = () => {
        if(!this.state.animation) {
            let fallDir = 1;
            let collision = false;
            this.setState({
                animation: setInterval(() => {
                    let height = Math.max(minHeight, Math.min(maxHeight, 
                        this.state.height + (fallDir * dropStep)));
                    this.setState({
                        height
                    })

                    collision = this.checkCollision();
                    if(collision && !this.state.colliding) {
                        this.setState({
                            colliding: true
                        })
                        // Reduce the player's lives by 1 and check if they died
                        this.props.dispatch(decrementPlayerLives());
                        if(this.props.player.lives === 0) {
                            this.clearAnimation();
                            this.endGame();
                        }
                    }

                    // Switch direction when it reaches maxHeight
                    if(height === maxHeight) fallDir = -1;
                    // End the animation 
                    if(height == minHeight && fallDir == -1) {
                        this.setState({
                            colliding: false
                        })
                        
                        this.clearAnimation();
                        this.props.incrementScore();
                        if(this.props.currentScore && this.props.currentScore % 25 === 0) {
                            this.incrementCurrency(); 
                        }
                    }
                }, 10)
            })
        }
    }

    checkCollision = () => {
        let pillarPos = windowHeight - this.state.height;

        let playerLeft = this.props.player.position;
        let playerRight = playerLeft + this.props.player.width;

        let pillarLeft = this.props.width * this.props.pillar.column;
        let pillarRight = pillarLeft + this.props.width;

        let playerInColumn = (playerLeft >= pillarLeft && playerRight <= pillarRight)

        return (pillarPos < this.props.player.height && playerInColumn)
    }

    incrementCurrency = () => {
        this.props.incrementCurrency();
        AsyncStorage.setItem("player:currency", 
            JSON.stringify(this.props.player.currency)).catch(err => {
                alert("Failed to update currency!"); 
            })
    }

    endGame = () => {
        // Check for a score higher than the current
        if(this.props.currentScore > this.props.highScore) {
            // Update the high score
            this.props.dispatch(updateHighScore(this.props.currentScore));
            AsyncStorage.setItem("game:highscore", JSON.stringify(this.props.currentScore))
        }
        // Display the game over screen
        this.props.dispatch(displayGameOver());
    }

    clearAnimation = () => {
        clearInterval(this.state.animation);
        this.setState({
            animation: null
        })
        this.props.dispatch(deactivatePillar(this.props.id));
    }

    render() {
        let color = 'whitesmoke';
        let fallsOn = this.props.pillars[this.props.id].fallsOn;
        let diff = fallsOn - this.props.ticks;
        
        if(this.props.pillars[this.props.id].active) {
            if (diff < 10) color = 'black';
            else color = `#${((diff / 50) * 240).toString(16)}${((diff / 50) * 240).toString(16)}${((diff / 50) * 240).toString(16)}`
        }

        return (
            <View style={{
                ...this.props.style,
                height: this.state.height,
                backgroundColor: color
            }} >
                
            </View>
        )
    }
}

const mapStateToProps = state => ({
    highScore: state.game.highScore,
    currentScore: state.game.score,
    player: state.player,
    ticks: state.game.gameTime,
    pillars: state.pillars, 
})

const mapDispatchToProps = dispatch => ({
    dispatch,
    incrementScore: () => { dispatch(incrementScore()) },
    incrementCurrency: () => { dispatch(incrementPlayerCurrency()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Pillar);