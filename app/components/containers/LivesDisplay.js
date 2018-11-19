/**
 * @file Container component for displaying the number of lives the player has left
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import ValueDisplay from '../presentational/ValueDisplay';

/**
 * Container component for displaying the number of lives the player has left
 * @class
 */
class LivesDisplay extends Component {
    render() {
        return (
            <ValueDisplay style={this.props.style}
                text={'Lives'} value={this.props.lives} />
        )
    }
}

const mapStateToProps = state => ({
    lives: state.player.lives
})

export default connect(mapStateToProps)(LivesDisplay);