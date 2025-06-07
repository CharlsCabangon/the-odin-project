import { GameBoard } from "./gameBoard.js";
import { GameController } from "./gameController.js";

export const DisplayController = (function() {
    const cells = document.querySelectorAll(".grid-cell"); // NOTE: querySelectorAll returns a NodeList
    const turnMessage = document.getElementById("turnMessage");

    const render = () => {
        const board = GameBoard.getBoard();

        cells.forEach((cell, index) => {
            cell.textContent = board[index]; // Show symbol in each cell.
        });
    };

    const setTurnMessage = (text) => {
        turnMessage.textContent = text;
    }

    const bindEvents = () => { // Attach click listeners to each cell.
        cells.forEach((cell, index) => {
            cell.addEventListener('click', () => { // Trigger game logic when cell is clicked.
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