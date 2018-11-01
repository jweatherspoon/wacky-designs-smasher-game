/**
 * @file Presentational component for the "Game Over" screen
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScoreDisplay from '../containers/ScoreDisplay';
import MainMenuButton from '../containers/MainMenuButton';

/**
 * Presentational component for the "Game Over" screen
 * @class
 */
class GameOverScreen extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                    Game Over!
                </Text>
                <View style={styles.verticalCenter}>
                    <ScoreDisplay style={{fontSize: 20}} />
                </View>
                <MainMenuButton />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    verticalCenter: {
        flex: 1,
        alignItems: 'center'
    }
});

export default GameOverScreen;