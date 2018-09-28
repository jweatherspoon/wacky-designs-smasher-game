/**
 * @file Redux reducer for the player object
 * @author Jonathan Weatherspoon
 */

import {
    UPDATE_PLAYER_POSITION,
    INCREMENT_PLAYER_LIVES,
    DECREMENT_PLAYER_LIVES,
    UPDATE_PLAYER_CURRENCY,
} from '../actions/action-types';

const initialState = {
    position: 0,
    currency: 0,
    inventory: [],
    lives: 1,
};

export default PlayerReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_PLAYER_CURRENCY:
            return {
                ...state,
                currency: state.currency + action.payload.delta,
            }
        case INCREMENT_PLAYER_LIVES:
            return {
                ...state,
                lives: state.lives + 1
            }
        case DECREMENT_PLAYER_LIVES:
            return {
                ...state,
                lives: Math.max(state.lives - 1, 0),
            }
        case UPDATE_PLAYER_POSITION:
            return {
                ...state,
                position: state.position + action.payload.position
            }
        default:
            return state
    }
}