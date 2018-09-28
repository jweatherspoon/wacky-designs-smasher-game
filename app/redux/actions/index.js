import * as types from './action-types';

export const changeUI = screen => ({
    type: types.UPDATE_SCREEN,
    payload: {
        screen: screen
    }
})

export const movePlayer = (delta, max) => ({
    type: types.UPDATE_PLAYER_POSITION,
    payload: {
        position: delta,
        min: 0,
        max: max
    }
})