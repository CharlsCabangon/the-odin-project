
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;
const maxRound = 5;

// WAHAHAHA SHOULD'VE USED getElementById
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const computerChoiceDisplay = document.querySelector("#computer-choice-display");
const btnPlayAgainDisplay = document.querySelector("#play-again-container");

// const scoreDisplay = document.querySelector("#score-display");
const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");
const result = document.querySelector("#result");

function getComputerChoice() {
    
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            computerChoiceDisplay.textContent = "Computer chose rock!";
            return "ROCK";
        case 1:
            computerChoiceDisplay.textContent = "Computer chose paper!";
            return "PAPER";
        case 2:
            computerChoiceDisplay.textContent = "Computer chose scissors!";
            return "SCISSORS";
    }
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        result.textContent = "Draw";
    }
    else if (
        (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (playerChoice === "PAPER" && computerChoice === "ROCK") ||
        (playerChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        playerScore += 1;
        playerScoreSpan.textContent = `${playerScore}`;
        result.textContent = "You won!";
    }
    else if (
        (playerChoice === "SCISSORS" && computerChoice === "ROCK") ||
        (playerChoice === "ROCK" && computerChoice === "PAPER") ||
        (playerChoice === "PAPER" && computerChoice === "SCISSORS")
    ) {
        computerScore += 1;
        computerScoreSpan.textContent = `${computerScore}`;
        result.textContent = "Computer won!";
    }
    gameRound++;

    if(gameRound === maxRound) {
        endGame();
        playAgain();
    }
}

function endGame() {

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    if(playerScore > computerScore) {
        alert("You won!");
    }
    else if(computerScore > playerScore) {
        alert("computer won!");
    }
    else {
        alert("It's a draw!");
    }
}

function playAgain() {
    btnPlayAgainDisplay.innerHTML = "";

    const btn = document.createElement("button");
    btn.classList.add("btn-play-again");
    btn.innerText = "Play again";
    btnPlayAgainDisplay.appendChild(btn);

    btn.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        gameRound = 0;

        playerScoreSpan.textContent = `${playerScore}`;
        computerScoreSpan.textContent = `${computerScore}`

        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;

        btnPlayAgainDisplay.innerHTML = "";
    })
}

rock.addEventListener('click', () => {
    playRound("ROCK", getComputerChoice());
});

paper.addEventListener('click', () => {
    playRound("PAPER", getComputerChoice());
});

scissors.addEventListener('click', () => {
    playRound("SCISSORS", getComputerChoice());
});