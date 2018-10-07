/**
 * @file Component for the main game screen
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { View } from 'react-native';

import PlayerSprite from '../containers/PlayerSprite';
import GameMechanics from '../containers/GameMechanics';
import PillarContainer from '../containers/PillarContainer';

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
                <View style={{zIndex: 2}}>
                    <PillarContainer /> 
                </View>

                <View style={{
                    zIndex: 1,
                    position: 'absolute', 
                    bottom: 20,
                    width: '100%'
                }}>
                    <PlayerSprite /> 
                </View>
            </GameMechanics>
        )
    }
}

export default GameScreen;