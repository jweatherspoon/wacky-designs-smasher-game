/**
 * @file Pillar component for displaying in game
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

import {
    displayGameOver,
    resetGameVars,
    updateHighScore,
    incrementScore
} from '../../redux/actions';

const maxHeight = Dimensions.get('window').height - 40;
const minHeight = 20;
const dropStep = maxHeight / 25;

/**
 * Handles rendering a pillar in the game 
 * @class 
 */
class Pillar extends Component {

    state = {
        height: 20,
        animation: null
    }

    drop = () => {
        if(!this.state.animation) {
            let fallDir = 1;
            this.setState({
                animation: setInterval(() => {
                    let height = Math.max(minHeight, Math.min(maxHeight, 
                        this.state.height + (fallDir * dropStep)));
                    this.setState({
                        height
                    })

                    // Switch direction when it reaches maxHeight
                    if(height === maxHeight) fallDir = -1;
                    // End the animation 
                    if(height == minHeight && fallDir == -1) {
                        clearInterval(this.state.animation);
                        this.setState({
                            animation: null
                        })
                    }
                }, 10)
            })
        }
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
    playerPosition: state.player.position
})

export default connect(mapStateToProps)(Pillar);