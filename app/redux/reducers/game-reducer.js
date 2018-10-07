/**
 * @file Contains the reducer for handling game functions
 * @author Jonathan Weatherspoon
 */

import {
    UPDATE_DIFFICULTY,
    UPDATE_HIGH_SCORE,
    INCREMENT_GAME_TIME,
    RESET_GAME_TIME,
    INCREMENT_SCORE,
    RESET_SCORE
} from '../actions/action-types';

const initialState = {
    difficulty: 1,
    highScore: 0,
    score: 0,
    gameTime: 0
}

/**
 * Reducer function for game state 
 * @param {object} state - The previous game state of the application
 * @param {object}  action - The action dispatched to this reducer
 */
export default GameReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_DIFFICULTY:
            return {
                ...state,
                difficulty: action.payload.difficulty
            }
        case UPDATE_HIGH_SCORE:
            return {
                ...state,
                highScore: action.payload.highScore
            }
        case INCREMENT_GAME_TIME:
            return {
                ...state,
                gameTime: state.gameTime + 1
            }
        case RESET_GAME_TIME:
            return {
                ...state,
                score: 0,
                gameTime: 0
            }
        case INCREMENT_SCORE:
            return {
                ...state,
                score: state.score + 1
            }
        case RESET_SCORE:
            return {
                ...state,
                score: 0
            }
        default:
            return state
    }
}