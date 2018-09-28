/**
 * @file Component for the main game screen
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';

import PlayerSprite from '../containers/PlayerSprite';
import GameMechanics from '../containers/GameMechanics';

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
                <PlayerSprite />
            </GameMechanics>
        )
    }
}

export default GameScreen;