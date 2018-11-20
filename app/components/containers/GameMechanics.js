/**
 * @file Container component that handles the player movement mechanics
 * @author Jonathan Weatherspoon
 */

import GestureRecognizer from 'react-native-swipe-gestures';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { _ } from 'lodash';
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
    }

    componentDidMount = () => {
        this.forceUpdate();
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

        if(this.props.ticks > 100) {
            // Check to see if any pillars need to be activated 
            let activePillars = this.props.pillars.filter(pillar => pillar.active);

            if (activePillars.length === 0) {
                activePillars = this.selectPillars();
                activePillars.forEach(pillar => this.activatePillar(pillar.column));
            } else {

            }
        }
    }

    selectPillars = () => {
        return _.sampleSize(this.props.pillars, this.props.difficulty);
    }

    activatePillar = id => {
        this.props.dispatch(activatePillar(id, this.props.ticks + 50));
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
    difficulty: state.game.difficulty
})

const mapDispatchToProps = dispatch => ({
    onSwipeLeft: () => playerAnimation(dispatch, -1),
    onSwipeRight: () => playerAnimation(dispatch, 1),
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(GameMechanics);