import { Player } from "./player.js";
import { GameBoard } from "./gameBoard.js";
import { DisplayController } from "./displayController.js";

export const GameController = (function() {
    const playerX = Player("Player 1", "X");
    const playerO = Player("Player O", "O");
    let currentPlayer = playerX;
    let gameOver = false;

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const playRound = (index) => {
        if(gameOver || !GameBoard.updateCell(index, currentPlayer.getPlayerSymbol())) {
            return;
        }

        DisplayController.render();

        if(checkWin(currentPlayer.getPlayerSymbol())) {
            DisplayController.setTurnMessage(`${currentPlayer.getPlayerName()} wins!`);
            gameOver = true;
            return;
        }

        if(GameBoard.getBoard().every(cell => cell !== "")) {
            DisplayController.setTurnMessage("It's a tie!");
            gameOver = true;
            return;
        }

        currentPlayer = currentPlayer === playerX ? playerO : playerX;
        DisplayController.setTurnMessage(`${currentPlayer.getPlayerName()}'s turn`);
    }

    const checkWin = (symbol) => {
        return winningCombos.some(combo =>
            combo.every(index => GameBoard.getBoard()[index] === symbol)
        );
    };

    const restart = () => {
        GameBoard.reset();
        currentPlayer = playerX;
        gameOver = false;
        DisplayController.render();
        DisplayController.setTurnMessage("Player X's turn");
    }

    return { playRound, restart };
})();