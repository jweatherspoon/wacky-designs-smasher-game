/**
 * @file Container component for displaying the number of lives the player has left
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';

import { TouchableOpacity } from 'react-native';
import { incrementPlayerLives } from '../../redux/actions';

import { connect } from 'react-redux';

import ValueDisplay from '../presentational/ValueDisplay';

/**
 * Container component for displaying the number of lives the player has left
 * @class
 */
class LivesDisplay extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.dispatch(incrementPlayerLives())}>
            
                <ValueDisplay style={this.props.style}
                    text={'Lives'} value={this.props.lives} />
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = state => ({
    lives: state.player.lives
})

export default connect(mapStateToProps)(LivesDisplay);