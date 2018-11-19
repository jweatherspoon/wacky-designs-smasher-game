/**
 * @file Container component for displaying the player's currency
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ValueDisplay from '../presentational/ValueDisplay';

import { TouchableOpacity } from 'react-native';
import { incrementPlayerCurrency } from '../../redux/actions';

/**
 * Container component for displaying the player's currency
 * @class 
 */
class CurrencyDisplay extends Component {
    render() {
        return (
            <TouchableOpacity 
                onPress={() => this.props.dispatch(incrementPlayerCurrency())}>
            <ValueDisplay 
                style={this.props.style}
                text={"Currency"} 
                value={this.props.currency}/>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = state => ({
    currency: state.player.currency
})

export default connect(mapStateToProps)(CurrencyDisplay);