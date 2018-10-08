/**
 * @file Handles the UI Switching for the app
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as screens from '../../redux/screens';

import WelcomeScreen from '../presentational/WelcomeScreen';
import GameScreen from '../presentational/GameScreen';
import GameOverScreen from '../presentational/GameOverScreen';

const screenDictionary = {
    [screens.WELCOME_SCREEN]: <WelcomeScreen key={'activeScreen'} />,
    [screens.GAME_SCREEN]: <GameScreen key={'activeScreen'} />,
    [screens.GAME_OVER_SCREEN]: <GameOverScreen key={'activeScreen'} />
}

/**
 * Handles UI switching for  the application
 * @class 
 */
class UIHandler extends Component {

    render() {
        let screenComponent = screenDictionary[this.props.screen];
        return (
            [screenComponent]
        )
    }
}

const mapStateToProps = state => ({
        screen: state.screen
})

export default connect(mapStateToProps)(UIHandler);