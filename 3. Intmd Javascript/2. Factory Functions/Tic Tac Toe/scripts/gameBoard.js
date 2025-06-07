// IIFE to encapsulate the game board state.

export const GameBoard = (function() {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const updateCell = (index, symbol) => {
        if(board[index] === "") {
            board[index] = symbol;
            return true;
        }
        return false; // Reject update if cell is already filled.
    };

    const reset = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    return { // Expose public functions.
        getBoard,
        updateCell,
        reset
    }
})();