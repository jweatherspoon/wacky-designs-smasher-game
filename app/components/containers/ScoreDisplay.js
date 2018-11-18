/**
 * @file Container component for displaying the player's score
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ValueDisplay from '../presentational/ValueDisplay';

/**
 * Container component for displaying the player's score
 * @class
 */
class ScoreDisplay extends Component {
    render() {
        return (
            <ValueDisplay style={this.props.style}
                text={"Score"} value={this.props.score} />
        )
    }
}

const mapStateToProps = state => ({
    score: state.game.score,
    highScore: state.game.highScore
});

export default connect(mapStateToProps)(ScoreDisplay);