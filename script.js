function getComputerChoice() {
    const randomComputerSelection = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    if (randomComputerSelection === 1) {
        alert("Computer chooses Rock");
        return "rock";
    } else if (randomComputerSelection === 2) {
        alert("Computer chooses Paper");
        return "paper";
    } else {
        alert("Computer chooses Scissors");
        return "scissors";
    }
}

const playerSelection = prompt("Choose between Rock, Paper or Scissors").toLowerCase();
alert(playerSelection)
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You Lose! Paper beats Rock");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You Win! Rock beats Scissors");
    }  else if (playerSelection === "paper" && computerSelection === "scissors") {
       alert("You Lose! Scissors beats Paper");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You Win! Paper beats Rock");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You Lose! Paper beats Scissors");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You Win! Scissors beats Paper");
    } else if (playerSelection === computerSelection) {
        alert("It's a tie!");
    }
  }

 
  console.log(playRound(playerSelection, computerSelection));