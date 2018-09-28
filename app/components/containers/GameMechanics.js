/**
 * @file Container component that handles the player movement mechanics
 * @author Jonathan Weatherspoon
 */

import GestureRecognizer from 'react-native-swipe-gestures';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { movePlayer } from '../../redux/actions';

const width = Dimensions.get('window').width;

/**
 * Extension of the gesture recognizer to handle player
 * movement mechanics
 */
class GameMechanics extends GestureRecognizer {

}

let moveAnimation = null;
const steps = 10;

/**
 * Handle the player movement animation by repeatedly dispatching 
 * actions to the redux store
 * @param {function} dispatch - The dispatch function for redux
 * @param {number} direction - 1 for right, -1 for left 
 */
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