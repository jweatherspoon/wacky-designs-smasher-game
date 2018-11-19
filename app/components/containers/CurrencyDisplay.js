/**
 * @file Container component for displaying the player's currency
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ValueDisplay from '../presentational/ValueDisplay';

/**
 * Container component for displaying the player's currency
 * @class 
 */
class CurrencyDisplay extends Component {
    render() {
        return (
            <ValueDisplay 
                style={this.props.style}
                text={"Currency"}
                value={this.props.currency}/>
        )
    }
}

const mapStateToProps = state => ({
    currency: state.player.currency
})

export default connect(mapStateToProps)(CurrencyDisplay);