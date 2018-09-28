/**
 * @file Handles the UI Switching for the app
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-redux';
import WelcomeScreen from './WelcomeScreen';
import GameScreen from './GameScreen';

class UIHandler extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentComponent: WelcomeScreen
        }
    }

    startGame = () => {
        this.setState({
            currentComponent: GameScreen
        })
    }

    render() {
        return (
            <this.state.currentComponent changeUI={this.startGame} />
        )
    }
}

const mapStateToProps = state => {
    return {
        screen: state.screen
    }
}

const mapDispatchToProps = {

}

export default UIHandler;