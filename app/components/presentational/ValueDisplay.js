/**
 * @file Presentational comopnent for displaying some value
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { View, Text, Stylesheet } from 'react-native';

/**
 * Presentational comopnent for displaying some value
 * @class 
 */
class ValueDisplay extends Component {
    render() {
        return (
            <View>
                <Text style={{ ...this.props.style }}>
                    {this.props.text}: {this.props.value}
                </Text>
            </View>
        )
    }
}

export default ValueDisplay;