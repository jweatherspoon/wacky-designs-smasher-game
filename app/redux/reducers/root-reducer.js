/**
 * @file Contains root reducer for redux store
 * @author Jonathan Weatherspoon
 */

import { combineReducers } from 'redux';

import GameReducer from './game-reducer';
import PlayerReducer from './player-reducer';
import ScreenReducer from './screen-reducer';
import PillarReducer from './pillar-reducer';

/**
 * Handles all application state updates
 */
export default RootReducer = combineReducers({
    game: GameReducer,
    player: PlayerReducer,
    screen: ScreenReducer,
    pillars: PillarReducer,
});