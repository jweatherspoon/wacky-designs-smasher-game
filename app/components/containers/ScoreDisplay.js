/**
 * @file Container component for displaying the player's score
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

/**
 * Container component for displaying the player's score
 * @class
 */
class ScoreDisplay extends Component {
    render() {
        return (
            <View>
                <Text style={{...this.props.style}}>
                    Score: {this.props.score}
                </Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    score: state.game.score
});

export default connect(mapStateToProps)(ScoreDisplay);