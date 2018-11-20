/**
 * @file Presentational screen for displaying difficulty selections
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import DifficultyButton from '../containers/DifficultyButton';

/**
 * Presentational screen for displaying difficulty selections
 * @class
 */
class DifficultySelectionScreen extends Component {
    render() {
        return (
            <View style={styles.difficultyContainer}>
                <Text style={styles.title}>
                    Choose Difficulty
                </Text>
                <DifficultyButton content={"Easy"} value={2} style={styles.button} />
                <DifficultyButton content={"Medium"} value={3} style={styles.button} />
                <DifficultyButton content={"Hard"} value={4} style={styles.button} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    difficultyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default DifficultySelectionScreen;