

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