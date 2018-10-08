/**
 * @file Container component that handles the player movement mechanics
 * @author Jonathan Weatherspoon
 */

import GestureRecognizer from 'react-native-swipe-gestures';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import {
    movePlayer,
    incrementGameTime,
    activatePillar
} from '../../redux/actions';

const width = Dimensions.get('window').width;
const tickTime = 10;

/**
 * Extension of the gesture recognizer to handle player
 * movement mechanics
 */
class GameMechanics extends GestureRecognizer {

    state = {
        gameInterval: null,
        activated: false
    }

    componentDidMount = () => {
        this.setState({
            gameInterval: setInterval(this.update, tickTime)
        })
    }

    componentWillUnmount = () => {
        clearInterval(this.state.gameInterval);
        this.setState({
            gameInterval: null
        })
    }

    update = () => {
        this.props.dispatch(incrementGameTime());

        // Check to see if any pillars need to be activated 
        if(!this.state.activated) {
            this.activatePillar(2);
            this.setState({activated:  true})
        }
    }

    selectPillars = () => {
        return (Math.random() < 0.5) ? this.props.pillars[2] : this.props.pillars[3];
    }

    activatePillar = id => {
        this.props.dispatch(activatePillar(id, this.props.ticks + 1000));
    }

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
    if (!moveAnimation) {
        let counter = 0, step = delta / steps;
        moveAnimation = setInterval(() => {
            if (counter < steps) {
                counter++;
                dispatch(movePlayer(direction * step, width - delta));
            } else {
                clearInterval(moveAnimation);
                moveAnimation = null;
            }
        }, 10)
    }
}

const mapStateToProps = state => ({
    pillars: state.pillars,
    ticks: state.game.gameTime,
    player: state.player,
})

const mapDispatchToProps = dispatch => ({
    onSwipeLeft: () => playerAnimation(dispatch, -1),
    onSwipeRight: () => playerAnimation(dispatch, 1),
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(GameMechanics);