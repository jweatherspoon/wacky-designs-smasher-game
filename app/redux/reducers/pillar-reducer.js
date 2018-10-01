/**
 * @file Contains the reducer function for handling the pillar objects
 * @author Jonathan Weatherspoon
 */

import {
    UPDATE_PILLAR_POSITION,
    ACTIVATE_PILLAR
} from '../actions/action-types';

import defaultPillar from '../../models/pillar';

const initialState = [0,1,2,3,4].map(i => defaultPillar(i));

const GetPillar = (state, index) => state[index];

const colors = {
    ACTIVE: 'brown',
    INACTIVE: 'lightgray'
}

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
                color: colors.ACTIVE
            }

            return newState;
        default: 
            return state;
    }
}