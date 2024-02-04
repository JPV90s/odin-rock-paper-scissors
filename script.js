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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"
    }  else if (playerSelection === "paper" && computerSelection === "scissors") {
       return "You Lose! Scissors beats Paper"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Paper beats Scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
  }

function playGame(num) {
    for (let i = 0; i < num; i++) {
        const playerSelection = prompt("Choose between Rock, Paper or Scissors").toLowerCase();
        alert("You choose " + playerSelection)
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame(5);
