
export const GameBoard = (function() {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const updateCell = (index, symbol) => {
        if(board[index] === "") {
            board[index] = symbol;
            return true;
        }
        return false;
    };

    const reset = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    return {
        getBoard,
        updateCell,
        reset
    }
})();