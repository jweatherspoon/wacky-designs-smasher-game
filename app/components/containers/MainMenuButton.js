/**
 * @file Container component for navigating to the welcome screen
 * @author Jonathan Weatherspoon
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Button from '../presentational/Button';

import { 
    displayWelcome,
    resetGameVars,
    resetPillars,
    resetPlayerVars
} from '../../redux/actions';

/**
 * Container component for navigating to the welcome screen
 * @class
 */
class MainMenuButton extends Component {

    endGame = () => {
        this.props.dispatch(resetPillars());
        this.props.dispatch(resetGameVars());
        this.props.dispatch(resetPlayerVars());
        this.props.dispatch(displayWelcome());
    }

    render() {
        return (
            <Button text={"Return to Main Menu"}
                onPress={this.endGame}
                bottom={true} />
        )
    }
}

export default connect()(MainMenuButton);