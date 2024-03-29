/**
 * @file Handles all the application's action creators
 * @author Jonathan Weatherspoon
 */

import * as types from './action-types';

import * as screens from '../screens';

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

// Specific screen action creators
export const displayWelcome = () => changeUI(screens.WELCOME_SCREEN);
export const displayGame = () => changeUI(screens.GAME_SCREEN);
export const displayGameOver = () => changeUI(screens.GAME_OVER_SCREEN);
export const displayDifficulty = () => changeUI(screens.DIFFICULTY_SELECTION_SCREEN);

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

/**
 * Reset the player sprite
 */
export const resetPlayerVars = () => ({
    type: types.RESET_PLAYER
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
 * Reset the pillars
 */
export const resetPillars = () => ({
    type: types.RESET_PILLARS,
})

/**
 * Increment the game time
 */
export const incrementGameTime = () => ({
    type: types.INCREMENT_GAME_TIME
})

/**
 * Reset the game timer to 0
 */
export const resetGameVars = () => ({
    type: types.RESET_GAME_VARS
})

/**
 * Reset the player score to 0
 */
export const resetScore = () => ({
    type: types.RESET_SCORE
})

/**
 * Increment the score by 1
 */
export const incrementScore = () => ({
    type: types.INCREMENT_SCORE
})

/**
 * Update the high score for the player
 * @param {number} score - The new high score
 */
export const updateHighScore = score => ({
    type: types.UPDATE_HIGH_SCORE,
    payload: {
        highScore: score
    }
})

/**
 * Set the player's currency value
 * @param {number} currency - The new currency value
 */
export const setPlayerCurrency = currency => ({
    type: types.SET_PLAYER_CURRENCY,
    payload: {
        currency
    }
})

/**
 * Update the player's currency by some delta
 */
export const updatePlayerCurrency = delta => ({
    type: types.UPDATE_PLAYER_CURRENCY,
    payload: {
        delta
    }
})

/**
 * Increment the player's currency by 1
 */
export const incrementPlayerCurrency = () => ({
    type: types.INCREMENT_PLAYER_CURRENCY
})

/**
 * Decrement the player's lives by 1
 */
export const decrementPlayerLives = () => ({
    type: types.DECREMENT_PLAYER_LIVES
})

/**
 * Increment the player's lives by 1
 */
export const incrementPlayerLives = () => ({
    type: types.INCREMENT_PLAYER_LIVES
})

/**
 * Set the difficulty of the game
 */
export const updateDifficulty = difficulty => ({
    type: types.UPDATE_DIFFICULTY,
    payload: {
        difficulty
    }
})