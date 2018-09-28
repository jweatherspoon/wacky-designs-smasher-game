/**
 * @file Models a pillar for the game
 * @author Jonathan Weatherspoon
 */

export default column => {
    return {
        activeOn: null,
        fallsOn: null,
        position: 0,
        column: column
    }
}