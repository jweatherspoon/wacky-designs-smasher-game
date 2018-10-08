/**
 * @file Handles the rendering of the welcome  screen
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PlayButton from '../containers/PlayButton';
import HighScoreDisplay from '../containers/HighScoreDisplay';

/**
 * Handles the welcome screen rendering 
 * @class
 */
class WelcomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Wacky Designs Smasher Game
                </Text>
                <HighScoreDisplay />
                <PlayButton />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    title: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default WelcomeScreen;