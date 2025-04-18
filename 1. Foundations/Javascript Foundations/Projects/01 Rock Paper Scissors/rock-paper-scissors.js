
let playerScore = 0;
let computerScore = 0;
const winScore = 3;

function getPlayerChoice() {
    let playerChoice = Number(prompt("0 for Rock, 1 for Paper, 2 for Scissors"));
    
    if (playerChoice === 0) {
        return "ROCK";
    }
    else if (playerChoice === 1) {
        return "PAPER";
    }
    else if (playerChoice === 2) {
        return "SCISSORS";
    }
    else {
        return null;
    }
}
// console.log(getPlayerChoice());

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
        default:
            return null;
    }
}
// console.log(getComputerChoice());

function playRound(playerChoice, computerChoice) {

    if (
        (playerChoice === "ROCK" && computerChoice === "ROCK") ||
        (playerChoice === "PAPER" && computerChoice === "PAPER") ||
        (playerChoice === "SCISSORS" && computerChoice === "SCISSORS")
    ) {
        return "Draw";
    }
    else if (
        (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (playerChoice === "PAPER" && computerChoice === "ROCK") ||
        (playerChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        playerScore += 1;
        return "You won!";
    }
    else if (
        (playerChoice === "SCISSORS" && computerChoice === "ROCK") ||
        (playerChoice === "ROCK" && computerChoice === "PAPER") ||
        (playerChoice === "PAPER" && computerChoice === "SCISSORS")
    ) {
        computerScore += 1;
        return "Computer won!";
    }
}

function playGame() {

    for (let i = 1; i <= 3; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()))
    }
    
    if (playerScore > computerScore) {
        console.log(`You won! ${playerScore}/${computerScore}`);
    }
    else {
        console.log(`You lost! ${playerScore}/${computerScore}`);
    }
}

playGame();