/**
 * @file Reducer function for managing the current screen
 * @author Jonathan Weatherspoon
 */

import {
    UPDATE_SCREEN
} from '../actions/action-types';

import WelcomeScreen from '../../components/presentational/WelcomeScreen';

const initialState = "WelcomeScreen";

export default ScreenReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_SCREEN: 
            return action.payload.screen;
        default: 
            return state;
    }
}