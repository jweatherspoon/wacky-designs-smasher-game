/**
 * @file Container component for the play button
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';

import Button from '../presentational/Button';

import { displayGame } from '../../redux/actions';

/**
 * Handles switching from the welcome screen to the difficulty screen on click
 * @class
 */
class PlayButton extends Component {
    render() {
        return (
            <Button onPress={this.props.startGame}
                text={"Play"} bottom={true} />
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

const mapDispatchToProps = dispatch => ({
    startGame: () => dispatch(displayGame())
})

export default connect(null, mapDispatchToProps)(PlayButton);