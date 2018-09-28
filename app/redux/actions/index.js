/**
 * @file Handles all the application's action creators
 * @author Jonathan Weatherspoon
 */

import * as types from './action-types';

/**
 * Change the active screen in the application
 * @param {string} screen - The name of the screen component
 */
export const changeUI = screen => ({
    type: types.UPDATE_SCREEN,
    payload: {
        screen: screen
    }
})

/**
 * Move the player sprite 
 * @param {number} delta - The amount of pixels to move the player
 * @param {number} max - The max bound for the player's movement
 */
export const movePlayer = (delta, max) => ({
    type: types.UPDATE_PLAYER_POSITION,
    payload: {
        position: delta,
        min: 0,
        max: max
    }
})