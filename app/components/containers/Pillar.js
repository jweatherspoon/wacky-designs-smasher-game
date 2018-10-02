/**
 * @file Pillar component for displaying in game
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

/**
 * Handles rendering a pillar in the game 
 * @class 
 */
class Pillar extends Component {
    render() {
        return (
            <View style={this.props.style} >
                <Text>{this.props.pillar.column}</Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    playerPosition: state.player.position
})

export default connect(mapStateToProps)(Pillar);