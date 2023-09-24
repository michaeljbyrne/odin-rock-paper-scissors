


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


function playRound(playerSelection,computerSelection) {

    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice === computerSelection) {
        return "Tie game. Play again";
    } else if (playerChoice === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose!  Paper beats rock.";
    } else if (playerChoice === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win!  Rock beats scissors.";
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win!  Scissors beats paper.";
    } else if (playerChoice === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose!  Rock beats scissors.";
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win!  Paper beats rock.";
    } else if (playerChoice === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose!  Scissors beats paper.";
    }
}


let computerScore = 0;
let playerScore = 0;

function game() {

    let keepGoing = true;
    let playCount = 0;

    while (keepGoing = true) {

        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection,computerSelection));  //play game, return result
 
        playCount++;  // increment playCount for round check in while loop

        console.log(playCount);

        if(computerScore == 3 || playerScore ==3) {    //check whether or not game has been played 5 times
            keepGoing = false;

            if(computerScore > playerScore) {
                return `You lose! Computer beat you ${computerScore} - ${playerScore}`;
            } else {
            return `You win! You beat computer ${playerScore} - ${computerScore}`;
            }
    }
}

}

console.log(game());