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

    const display = () => {
        console.log(`
            ${board[0] || 0} | ${board[1] || 1} | ${board[2] || 2}
            ---+---+---
            ${board[3] || 3} | ${board[4] || 4} | ${board[5] || 5}
            ---+---+---
            ${board[6] || 6} | ${board[7] || 7} | ${board[8] || 8}
            `)
    };
    
    return { // Expose public functions.
        getBoard,
        updateCell,
        reset
    }
})();