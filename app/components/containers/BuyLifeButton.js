/**
 * @file Container component for buying lives 
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { 
    incrementPlayerLives,
    updatePlayerCurrency
} from '../../redux/actions';

/**
 * Container component for buying lives
 * @class
 */
class BuyLifeButton extends Component {

    buyLife = () => {
        if(this.props.currency > 25) {
            this.props.dispatch(updatePlayerCurrency(-25));
            this.props.dispatch(incrementPlayerLives());
        }
    }
    render() {
        return (
            <TouchableOpacity onPress={this.buyLife}>
                <Text style={this.props.style}>
                    Buy Life ($25)
                </Text>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = state => ({
    currency: state.player.currency
})

export default connect(mapStateToProps)(BuyLifeButton);