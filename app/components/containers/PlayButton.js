/**
 * @file Container component for the play button
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import {changeUI} from '../../redux/actions';

/**
 * Handles switching from the welcome screen to the game screen on click
 * @class
 */
class PlayButton extends Component {
    render() {
        return (
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button}
                    onPress={this.props.startGame}>
                    <Text style={styles.btnText}>
                        Play
                    </Text>
                </TouchableOpacity>
            </View>
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
    startGame: () => dispatch(changeUI("GameScreen"))
})

export default connect(null, mapDispatchToProps)(PlayButton);