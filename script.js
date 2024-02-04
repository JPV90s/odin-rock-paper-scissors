const playerSelectionDisplay = document.querySelector("#user-choice");
const computerSelectionDisplay = document.querySelector("#computer-choice");
const buttonPlayerSelection = document.querySelectorAll('button');
const resultDisplay = document.querySelector("#result");
const playerWins = document.querySelector("#player-wins");
const computerWins = document.querySelector("#computer-wins");
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let scoreLimit = 5;


function getComputerChoice() {
    const randomComputerSelection = Math.floor(Math.random() * 3) + 1
    if (randomComputerSelection === 1) {
        computerSelection = "rock";
        computerSelectionDisplay.innerText = computerSelection;
    } else if (randomComputerSelection === 2) {
        computerSelection = "paper";
        computerSelectionDisplay.innerText = computerSelection;
    } else {
        computerSelection = "scissors";
        computerSelectionDisplay.innerText = computerSelection;
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        resultDisplay.innerText = "You Lose! Paper beats Rock!";
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        resultDisplay.innerText = "You Win! Rock beats Scissors!";
        playerScore++;
    }  else if (playerSelection === "paper" && computerSelection === "scissors") {
        resultDisplay.innerText = "You Lose! Scissors beats Paper!";
        computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        resultDisplay.innerText = "You Win! Paper beats Rock!";
        playerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        resultDisplay.innerText = "You Lose! Paper beats Scissors!";
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        resultDisplay.innerText = "You Win! Scissors beats Paper!";
        playerScore++;
    } else if (playerSelection === computerSelection) {
        resultDisplay.innerText = "It's a tie!";
    }
    playerWins.innerText = playerScore;
    computerWins.innerText = computerScore;

    if (playerScore >= scoreLimit) {
        alert("You win the game! Congratulations!");
        buttonPlayerSelection.forEach((button) => {
            button.setAttribute("disabled", true); 
        })
    } else if (computerScore >= scoreLimit) {
        alert("You lose the game!");
        buttonPlayerSelection.forEach((button) => {
            button.setAttribute("disabled", true);
        })
    }
  }


function playGame() {
    buttonPlayerSelection.forEach((button) => {
        button.addEventListener("click", (e) => {
            playerSelection = e.target.id;
            playerSelectionDisplay.innerText = playerSelection;
            getComputerChoice();
            playRound(playerSelection, computerSelection);
            })
        })
    }

playGame();
