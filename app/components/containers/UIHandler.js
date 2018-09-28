/**
 * @file Handles the UI Switching for the app
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-redux';
import WelcomeScreen from '../presentational/WelcomeScreen';
import GameScreen from '../presentational/GameScreen';

import { changeUI } from '../../redux/actions';

const screenDictionary = {
    WelcomeScreen: <WelcomeScreen key={'activeScreen'}/>,
    GameScreen: <GameScreen key={'activeScreen'}/>
}

class UIHandler extends Component {

    startGame = () => {
        this.setState({
            currentComponent: GameScreen
        })
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

const mapDispatchToProps = dispatch => ({
    changeUI: () => dispatch(changeUI(GameScreen))
})

export default connect(mapStateToProps, mapDispatchToProps)(UIHandler);