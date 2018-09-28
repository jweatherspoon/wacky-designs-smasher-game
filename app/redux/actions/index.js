import * as types from './action-types';

export const changeUI = screen => ({
    type: types.UPDATE_SCREEN,
    payload: {
        screen: screen
    }
})

export const movePlayer = delta => ({
    type: types.UPDATE_PLAYER_POSITION,
    payload: {
        position: delta
    }
})