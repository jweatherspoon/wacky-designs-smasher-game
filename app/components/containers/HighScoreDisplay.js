/**
 * @file Container component for displaying the current high score value
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ValueDisplay from '../presentational/ValueDisplay';

/**
 * Container component for displaying the current high score value
 * @class
 */
class HighScoreDisplay extends Component {
    render() {
        return (
            <ValueDisplay style={this.props.style}
                text={"High Score"} value={this.props.highScore} />
        )
    }
}

const mapStateToProps = state => ({
    highScore: state.game.highScore
})

export default connect(mapStateToProps)(HighScoreDisplay);