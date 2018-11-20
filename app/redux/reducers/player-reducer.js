/**
 * @file Redux reducer for the player object
 * @author Jonathan Weatherspoon
 */

import {
    UPDATE_PLAYER_POSITION,
    INCREMENT_PLAYER_LIVES,
    DECREMENT_PLAYER_LIVES,
    UPDATE_PLAYER_CURRENCY,
    SET_PLAYER_CURRENCY,
    INCREMENT_PLAYER_CURRENCY,
    RESET_PLAYER,
} from '../actions/action-types';

const initialState = {
    position: 0,
    width: 75,
    height: 75,
    currency: 0,
    inventory: [],
    lives: 1,
};

/**
 * Reducer function for the player state 
 * @param {object} state - The previous player's state 
 * @param {object} action = The action dispatched to this reducer
 */
export default PlayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PLAYER_CURRENCY:
            return {
                ...state,
                currency: state.currency + action.payload.delta,
            }
        case SET_PLAYER_CURRENCY:
            return {
                ...state,
                currency: action.payload.currency
            }
        case INCREMENT_PLAYER_CURRENCY:
            return {
                ...state,
                currency: state.currency + 1
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
            let position = Math.min(action.payload.max,
                Math.max(state.position + action.payload.position,
                    action.payload.min));
            return {
                ...state,
                position
            }
        case RESET_PLAYER:
            return {
                ...initialState,
                currency: state.currency,
            };
        default:
            return state
    }
}