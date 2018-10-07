/**
 * @file Handles the UI Switching for the app
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import WelcomeScreen from '../presentational/WelcomeScreen';
import GameScreen from '../presentational/GameScreen';

const screenDictionary = {
    WelcomeScreen: <WelcomeScreen key={'activeScreen'}/>,
    GameScreen: <GameScreen key={'activeScreen'}/>
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