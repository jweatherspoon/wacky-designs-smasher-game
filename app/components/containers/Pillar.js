/**
 * @file Pillar component for displaying in game
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

import {
    displayGameOver,
    updateHighScore,
    incrementScore
} from '../../redux/actions';

const windowHeight = Dimensions.get('window').height;

const minHeight = 20;
const maxHeight = windowHeight- minHeight - 20;
const dropStep = maxHeight / 25;

/**
 * Handles rendering a pillar in the game 
 * @class 
 */
class Pillar extends Component {

    state = {
        height: minHeight,
        animation: null
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
                    if(collision) {
                        this.clearAnimation();
                        this.endGame();
                    }

                    // Switch direction when it reaches maxHeight
                    if(height === maxHeight) fallDir = -1;
                    // End the animation 
                    if(height == minHeight && fallDir == -1) {
                        this.clearAnimation();
                        this.incrementScore();
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

        let playerInColumn = (playerLeft === pillarLeft && playerRight === pillarRight)

        return (pillarPos < this.props.player.height && playerInColumn)
    }

    endGame = () => {
        // Check for a score higher than the current
        if(this.props.currentScore > this.props.highScore) {
            // Update the high score
            this.props.dispatch(updateHighScore(this.props.currentScore));
        }
        // Display the game over screen
        this.props.dispatch(displayGameOver());
    }

    clearAnimation = () => {
        clearInterval(this.state.animation);
        this.setState({
            animation: null
        })
    }

    incrementScore = () => {
        this.props.dispatch(incrementScore());
    }

    render() {
        return (
            <View style={{
                ...this.props.style,
                height: this.state.height
            }} >
                <TouchableOpacity onPress={this.drop}>
                    <Text>{this.props.pillar.column}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    highScore: state.game.highScore,
    currentScore: state.game.score,
    player: state.player
})

export default connect(mapStateToProps)(Pillar);