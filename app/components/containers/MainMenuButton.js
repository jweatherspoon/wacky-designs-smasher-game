/**
 * @file Container component for navigating to the welcome screen
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Button from '../presentational/Button';

import { 
    displayWelcome,
    resetGameVars
} from '../../redux/actions';

/**
 * Container component for navigating to the welcome screen
 * @class
 */
class MainMenuButton extends Component {

    endGame = () => {
        this.props.dispatch(resetGameVars());
        this.props.dispatch(displayWelcome());
    }

    render() {
        return (
            <Button text={"Return to Main Menu"}
                onPress={this.endGame} />
        )
    }
}

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        bottom: 10
    },
    button: {
        borderRadius: 10,
        backgroundColor: 'gray',
        width: 300,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 20,
        color: 'white',
    }
})

export default connect()(MainMenuButton);