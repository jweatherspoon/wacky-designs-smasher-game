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

export const updatePillarPosition = (index, position) => ({
    type: types.UPDATE_PILLAR_POSITION,
    payload: {
        index, 
        position
    }
})

/**
 * Activate a pillar
 */
export const activatePillar = (index, fallsOn) => ({
    type: types.ACTIVATE_PILLAR,
    payload: {
        index,
        fallsOn
    }
});

/**
 * Deactivate a pillar
 */
export const deactivatePillar = index => ({
    type: types.DEACTIVATE_PILLAR,
    payload: {
        index
    }
})

/**
 * Increment the game time
 */
export const incrementGameTime = () => ({
    type: types.INCREMENT_GAME_TIME
})