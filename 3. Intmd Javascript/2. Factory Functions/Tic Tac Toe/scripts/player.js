// Factory function that creates a player object. 
// Return an object exposing only the getters. These getters use CLOSURE

export function Player(name, symbol) {

    const getPlayerName = () => name;

    const getPlayerSymbol = () => symbol;

    return { 
        getPlayerName,
        getPlayerSymbol 
    };
}