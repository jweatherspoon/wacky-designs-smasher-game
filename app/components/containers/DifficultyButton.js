/**
 * @file Container component for choosing the game difficulty
 * @author Jonathan Weatherspoon
 */

import React from 'react';
import { connect } from 'react-redux';

import { updateDifficulty } from '../../redux/actions';

import Button from '../presentational/Button';

/**
 * Container component for choosing game difficulty
 * @class
 */
class DifficultyButton extends Button {

    setDifficulty = () => {
        this.props.dispatch(
            updateDifficulty(this.props.value)
        )
    }

    render() {
        <Button onPress={this.setDifficulty} text={this.props.content} />
    }
}

export default connect()(DifficultyButton);