import React, { Component } from 'react';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { movePlayer } from '../../redux/actions';

const width = Dimensions.get('window').width;

class GameMechanics extends GestureRecognizer {

}

let moveAnimation = null;
const steps = 10;
const playerAnimation = (dispatch, direction) => {
    const delta = width / 5;
    if(!moveAnimation) {
        let counter = 0, step = delta / steps;
        moveAnimation = setInterval(() => {
            if(counter < steps) {
                counter++;
                dispatch(movePlayer(direction * step, width - delta));
            } else {
                clearInterval(moveAnimation);
                moveAnimation = null;
            }
        }, 10)
    }
}

const mapDispatchToProps = dispatch => ({
    onSwipeLeft: () => playerAnimation(dispatch, -1),
    onSwipeRight: () => playerAnimation(dispatch, 1),
})

export default connect(null, mapDispatchToProps)(GameMechanics);