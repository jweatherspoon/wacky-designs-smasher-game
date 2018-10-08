/**
 * @file Presentational button component
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * Basic button component
 * @class 
 */
class Button extends Component {
    render() {
        return (
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button}
                    onPress={this.props.onPress}>
                    <Text style={styles.btnText}>
                        {this.props.text}
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

export default Button;