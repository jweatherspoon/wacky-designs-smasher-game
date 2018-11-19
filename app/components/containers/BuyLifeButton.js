/**
 * @file Container component for buying lives 
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { Text, TouchableOpacity, AsyncStorage } from 'react-native';
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
        if (this.props.currency >= 25) {
            this.props.dispatch(updatePlayerCurrency(-25));
            this.props.dispatch(incrementPlayerLives());
            AsyncStorage.setItem("player:currency", 
                JSON.stringify(this.props.currency));
        }
    }
    render() {
        let touchedOpacity = 1;
        let textColor = 'gray';
        if (this.props.currency >= 25) {
            touchedOpacity = 0.2;
            textColor = 'black';
        }
        return (
            <TouchableOpacity onPress={this.buyLife} activeOpacity={touchedOpacity}>
                <Text style={{
                    ...this.props.style,
                    color: textColor
                }}>
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