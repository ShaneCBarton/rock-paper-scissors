const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.className);
    });
});

let playerScore = 0;
let cpuScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    return choice === 1 ? "rock" : choice === 2 ? "paper" : "scissors";
}

function playRound(humanChoice, cpuChoice) {
    humanChoice = humanChoice.toLowerCase();
    cpuChoice = getComputerChoice();
    let playerWon = false;

    if (humanChoice === cpuChoice) {
        console.log("You tied!");
    } else if (humanChoice === "rock" && cpuChoice === "scissors") {
        console.log("You win! rock beats paper");
        playerWon = true;
    } else if (humanChoice === "paper" && cpuChoice === "rock") {
        console.log("You win! paper beats rock");
        playerWon = true;
    } else if (humanChoice === "scissor" && cpuChoice === "paper") {
        console.log("You win! scissors beats paper");
        playerWon = true;
    } else if (cpuChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose! rock beats paper");
    } else if (cpuChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! paper beats rock");
    } else if (cpuChoice === "scissor" && humanChoice === "paper") {
        console.log("You lose! scissors beats paper");
    }

    if (playerWon) {
        playerScore++;
    } else {
        cpuScore++;
    }
}

function playGame() {

    let resultString = "with a score of: " + playerScore + " vs a cpu score of: " + cpuScore;

    if (playerScore > cpuScore) {
        console.log("You won! " + resultString);
    } else {
        console.log("You lost! " + resultString);
    }
}

playGame();
