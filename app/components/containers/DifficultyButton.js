/**
 * @file Container component for choosing the game difficulty
 * @author Jonathan Weatherspoon
 */

import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Button from '../presentational/Button';

import { 
    updateDifficulty,
    displayGame 
} from '../../redux/actions';


/**
 * Container component for choosing game difficulty
 * @class
 */
class DifficultyButton extends Button {

    setDifficulty = () => {
        this.props.dispatch(
            updateDifficulty(this.props.value)
        )
        this.props.dispatch(displayGame());
    }

    render() {
        return (
            <View style={this.props.style}>
                <Button onPress={this.setDifficulty} text={this.props.content} />
            </View>
        )
    }
}

export default connect()(DifficultyButton);