import { GameBoard } from "./gameBoard.js";
import { GameController } from "./gameController.js";

export const DisplayController = (function() {
    const cells = document.querySelectorAll(".grid-cell");
    const turnMessage = document.getElementById("turnMessage");

    const render = () => {
        const board = GameBoard.getBoard();

        cells.forEach((cell, index) => {
            cell.textContent = board[index];
        });
    };

    const setTurnMessage = (text) => {
        turnMessage.textContent = text;
    }

    const bindEvents = () => {
        cells.forEach((cell, index) => {
            cell.addEventListener('click', () => {
                GameController.playRound(index);
            });
        });
    };

    return {
        render,
        setTurnMessage,
        bindEvents
    };
})();