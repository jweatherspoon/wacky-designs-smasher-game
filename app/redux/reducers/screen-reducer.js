/**
 * @file Reducer function for managing the current screen
 * @author Jonathan Weatherspoon
 */

import {
    UPDATE_SCREEN
} from '../actions/action-types';

import WelcomeScreen from '../../components/presentational/WelcomeScreen';

const initialState = "WelcomeScreen";

/**
 * Reducer  function for updating application UI
 * @param {string} state - The name of the previous UI component
 * @param {object} action - The action dispatched to this reducer
 */
export default ScreenReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_SCREEN: 
            return action.payload.screen;
        default: 
            return state;
    }
}