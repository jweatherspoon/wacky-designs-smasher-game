/**
 * @file Handles the UI Switching for the app
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import { updateHighScore, setPlayerCurrency } from '../../redux/actions';

import * as screens from '../../redux/screens';

import WelcomeScreen from '../presentational/WelcomeScreen';
import GameScreen from '../presentational/GameScreen';
import GameOverScreen from '../presentational/GameOverScreen';
import DifficultySelectionScreen from '../presentational/DifficultySelectionScreen';

const screenDictionary = {
    [screens.WELCOME_SCREEN]: <WelcomeScreen key={'activeScreen'} />,
    [screens.GAME_SCREEN]: <GameScreen key={'activeScreen'} />,
    [screens.GAME_OVER_SCREEN]: <GameOverScreen key={'activeScreen'} />,
    [screens.DIFFICULTY_SELECTION_SCREEN]: <DifficultySelectionScreen key={'activeScreen'} />,
}

/**
 * Handles UI switching for  the application
 * @class 
 */
class UIHandler extends Component {

    componentDidMount() {
        // Set the high score 
        AsyncStorage.getItem("game:highscore").then(val => {
            let score = JSON.parse(val);
            if(score && score !== "") 
                this.props.dispatch(updateHighScore(score));
        }).catch(err => {});

        // Set the player's currency
        AsyncStorage.getItem("player:currency").then(val => {
            let currency = JSON.parse(val);
            if(currency && currency !== "") 
                this.props.dispatch(setPlayerCurrency(currency));
        }).catch(err => {});
    }

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