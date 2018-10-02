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
    updatePillarPosition,
    deactivatePillar,
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
        pillarIntervals: [
            null,
            null,
            null,
            null,
            null
        ]
    }

    componentDidMount = () => {
        this.setState({
            gameInterval: setInterval(this.update, 10)
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
        let activePillars = this.props.pillars.filter(pillar => pillar.active);

        this.activatePillar(0);

        clearInterval(this.state.gameInterval);

        // // Activate some pillars
        // if (activePillars.length === 0) {
        //     activePillars = this.selectPillars();
        //     for(let i = 0; i < activePillars.length; i++) {
        //         let pillar = activePillars[i];
        //         this.activatePillar(pillar.column)
        //     }
        // } else {
        //     // Check to see if any pillars need to be dropped
        //     for(let i = 0; i < activePillars.length; i++) {
        //         let pillar = activePillars[i];
        //         if (pillar.fallsOn === this.props.ticks) {
        //             this.dropPillar(pillar.column);
        //         }
        //     }
        // }
    }

    selectPillars = () => {
        return this.props.pillars;
    }

    activatePillar = id => {
        this.props.dispatch(activatePillar(id, this.props.ticks + 100));
    }

    dropPillar = id => {
        let intervals = this.state.pillarIntervals;
        let fallDir = 1;
        intervals[id] = setInterval(() => {
            if (this.props.pillars[id].position < 100) {
                let pillarPos = this.props.pillars[id].position + 10;
                this.props.dispatch(updatePillarPosition(id, pillarPos))
            } else {
                fallDir = -1;
                let pillarPos = this.props.pillars[id].position - 10;
                this.props.dispatch(updatePillarPosition(id, pillarPos));
            }

            if(fallDir === -1 && this.props.pillars[id].position <= 10) {
                clearInterval(intervals[id]);
                intervals[id] = null;
                this.setState({
                    pillarIntervals: intervals
                })
                this.props.dispatch(deactivatePillar(id));
            }
        }, tickTime);

        this.setState({
            pillarIntervals: intervals
        });
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
})

const mapDispatchToProps = dispatch => ({
    onSwipeLeft: () => playerAnimation(dispatch, -1),
    onSwipeRight: () => playerAnimation(dispatch, 1),
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(GameMechanics);