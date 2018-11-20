/**
 * @file Presentational screen for displaying difficulty selections
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import DifficultyButton from '../containers/DifficultyButton';

/**
 * Presentational screen for displaying difficulty selections
 * @class
 */
class DifficultySelectionScreen extends Component {
    render() {
        return (
            <View style={styles.difficultyContainer}>
                <DifficultyButton content={"Easy"} value={2} />
                <DifficultyButton content={"Medium"} value={3} />
                <DifficultyButton content={"Hard"} value={4} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    difficultyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default DifficultySelectionScreen;