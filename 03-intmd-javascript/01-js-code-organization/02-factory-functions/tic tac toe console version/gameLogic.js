import { Player } from "./players";
import { GameBoard } from "./gameBoard";
const GameLogic = (function () {
    let currentPlayer;
    let player1;
    let player2;

    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
        [0, 4, 8], [2, 4, 6],            // diags
    ];

    const start = () => {
        player1 = Player("Player 1", "X");
        player2 = Player("Player 2", "O");
        currentPlayer = player1;
        GameBoard.reset();
        console.clear();
        console.log("Tic Tac Hoe Started!");
        GameBoard.display();
    };

    const makeMove = (index) => {
        if(GameBoard.updateCell(index, currentPlayer.symbol)) {
            GameBoard.display();

            if(checkWin(currentPlayer.symbol)) {
                console.log(`${currentPlayer.name} wins!`);
                return;
            }

            if(checkDraw()) {
                console.log("It's a draw!");
                return;
            }

            switchPlayer();
            console.log(`Your turn, ${currentPlayer.name} (${currentPlayer.symbol})`);
        }

        else {
            console.log("Invalid move. Try again.");
        }
    };

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const checkWin = (symbol) => {
        return winningCombos.some(combo =>
            combo.every(index => GameBoard.getBoard()[index] === symbol)
        );
    };

    const checkDraw = () => {
        return GameBoard.getBoard().every(cell => cell !== "");
    };

    return { start, makeMove };
})();