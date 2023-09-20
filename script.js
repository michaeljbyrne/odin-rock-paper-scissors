


function getComputerChoice() {
    let computerInt = Math.floor(Math.random() * 3);
    let computerChoice;

    switch(computerInt) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
}

return computerChoice;
}

console.log(getComputerChoice());


const playerSelection = "rock";
const computerSelection = getComputerChoice();


function playRound(playerSelection,computerSelection) {

    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice === computerSelection) {
        return "Tie game. Play again";
    } else if (playerChoice === "rock" && computerSelection === "paper") {
        return "You lose!  Paper beats rock.";
    } else if (playerChoice === "rock" && computerSelection === "scissors") {
        return "You win!  Rock beats scissors.";
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        return "You win!  Scissors beats paper.";
    } else if (playerChoice === "scissors" && computerSelection === "rock") {
        return "You lose!  Rock beats scissors.";
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        return "You win!  Paper beats rock.";
    } else if (playerChoice === "paper" && computerSelection === "scissors") {
        return "You lose!  Scissors beats paper.";
    }
}
