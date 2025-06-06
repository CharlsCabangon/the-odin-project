
export function Player(name, symbol) {

    const getPlayerName = () => name;

    const getPlayerSymbol = () => symbol;

    return { 
        getPlayerName,
        getPlayerSymbol 
    };
}