/**
 * @file Contains the reducer function for handling the pillar objects
 * @author Jonathan Weatherspoon
 */

import {
    UPDATE_PILLAR_POSITION,
    ACTIVATE_PILLAR,
    DEACTIVATE_PILLAR
} from '../actions/action-types';

const colors = {
    ACTIVE: 'brown',
    INACTIVE: 'lightgray'
}

const initialState = [0, 1, 2, 3, 4].map(column => ({
    active: false,
    fallsOn: null,
    color: colors.INACTIVE,
    position: 20,
    column: column
}));

const GetPillar = (state, index) => state[index];


/**
 * Handles updating the pillar  state for the application
 * @param {object[]} state - The previous state of the application
 * @param {object} action - The action dispatched to this reducer
 */
export default PillarReducer = (state = initialState, action) => {
    let newState, pillar;
    switch(action.type) {
        case UPDATE_PILLAR_POSITION:
            newState = state;
            pillar = GetPillar(newState, action.payload.index);
            newState[action.payload.index] = {
                ...pillar, 
                position: action.payload.position,
            }

            return newState;
        case ACTIVATE_PILLAR:
            newState = state;
            pillar = GetPillar(newState, action.payload.index);
            newState[action.payload.index] = {
                ...pillar, 
                color: colors.ACTIVE,
                active: true,
                fallsOn: action.payload.fallsOn
            }
            return newState;
        case DEACTIVATE_PILLAR:
            newState = state;
            pillar = GetPillar(newState, action.payload.index);
            newState[action.payload.index] = {
                ...pillar,
                colors: colors.INACTIVE,
                active: false,
                fallsOn: null
            }
        default: 
            return state;
    }
}