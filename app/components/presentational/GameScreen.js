/**
 * @file Component for the main game screen
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import PlayerSprite from '../containers/PlayerSprite';
import GameMechanics from '../containers/GameMechanics';
import PillarContainer from '../containers/PillarContainer';
import ScoreDisplay from '../containers/ScoreDisplay';

/**
 * Renders everything needed for the core game
 * @class 
 */
class GameScreen extends Component {

    render() {

        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        }

        return (
            <GameMechanics
                config={config}
                style={{
                    flex: 1
                }} >
                <View style={styles.pillarContainer}>
                    <PillarContainer /> 
                </View>

                <View style={styles.scoreContainer}>
                    <ScoreDisplay style={styles.score} />
                </View>

                <View style={styles.playerContainer}>
                    <PlayerSprite /> 
                </View>
            </GameMechanics>
        )
    }
}

const styles = StyleSheet.create({
    playerContainer: {
        zIndex: 1,
        position: 'absolute',
        bottom: 20,
        width: '100%'
    },
    pillarContainer: {
        zIndex: 2
    },
    scoreContainer: {
        zIndex: 3,
        width: '100%',
        position: 'absolute',
        top: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    score: {
        fontSize: 40
    }
})

export default GameScreen;