/**
 * @file Models a pillar for the game
 * @author Jonathan Weatherspoon
 */

export default column => {
    return {
        activeOn: null,
        fallsOn: null,
        bg: 'whitesmoke',
        position: 20,
        column: column
    }
}