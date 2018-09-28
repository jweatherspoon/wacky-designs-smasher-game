/**
 * @file Contains the reducer function for handling the pillar objects
 * @author Jonathan Weatherspoon
 */

import {

} from '../actions/action-types';

import defaultPillar from '../../models/pillar';

const initialState = [0,1,2,3,4].map(i => defaultPillar(i));

/**
 * Handles updating the pillar  state for the application
 * @param {object[]} state - The previous state of the application
 * @param {object} action - The action dispatched to this reducer
 */
export default PillarReducer = (state = initialState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}