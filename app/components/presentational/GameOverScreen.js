/**
 * @file Presentational component for the "Game Over" screen
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Presentational component for the "Game Over" screen
 * @class
 */
class GameOverScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;