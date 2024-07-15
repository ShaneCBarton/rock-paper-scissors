const buttons = document.querySelectorAll("button");
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        playRound(index + 1);
    });
});

const playerChoiceText = document.querySelector(".player-choice");
const cpuChoiceText = document.querySelector(".cpu-choice");
const scores = document.querySelector("#scores");
const buttonZone = document.getElementById("button-zone");

let playerScore = 0;
let cpuScore = 0;

function getComputerChoice(){
    return Math.floor(Math.random() * 3) + 1;
}

function playRound(humanChoice) {
    let cpuChoice = getComputerChoice();

    displayChoice(humanChoice, playerChoiceText);
    displayChoice(cpuChoice, cpuChoiceText);

    if (humanChoice === cpuChoice) { // tie
        roundResults("tie");
    } else if (humanChoice === 1  && cpuChoice === 2) { // rock loses to paper
        roundResults("lose");
        cpuScore++;
    } else if (humanChoice === 1 && cpuChoice === 3) {// rock beats scissor
        roundResults("win");
        playerScore++;
    } else if (humanChoice === 2 && cpuChoice === 1) {// paper beats rock
        roundResults("win");
        playerScore++;
    } else if (humanChoice === 2 && cpuChoice === 3) {// paper loses to scissor
        roundResults("lose");
        cpuScore++;
    } else if (humanChoice === 3 && cpuChoice === 1) {//scissor loses to rock
        roundResults("lose");
        cpuScore++;
    } else if (humanChoice === 3 && cpuChoice === 2) {// scissor beats paper
        roundResults("win");
        playerScore++;
    }

    scores.children[0].textContent = "Your Score: " + playerScore;
    scores.children[1].textContent = "CPU Score: " + cpuScore;

    checkScore();
}

function playGame() {

    let resultString = "with a score of: " + playerScore + " vs a cpu score of: " + cpuScore;

    if (playerScore > cpuScore) {
        console.log("You won! " + resultString);
    } else {
        console.log("You lost! " + resultString);
    }
}

function displayChoice(choiceValue, choiceText) {
    switch (choiceValue) {
        case 1:
            choiceText.textContent = "ROCK!";
            break;
        case 2:
            choiceText.textContent = "PAPER!";
            break;
        case 3:
            choiceText.textContent = "SCISSORS!";
            break;
    }
}

function roundResults(result) {
    switch (result) {
        case "win":
            playerChoiceText.style.color = "green";
            cpuChoiceText.style.color = "red";
            break;
        case "lose":
            playerChoiceText.style.color = "red";
            cpuChoiceText.style.color = "green";
            break;
        case "tie":
            playerChoiceText.style.color = "orange";
            cpuChoiceText.style.color = "orange";
            break;
    }
}
function checkScore() {
    if (playerScore === 5 || cpuScore === 5) {
        buttonZone.remove();
        const winnerDiv = document.createElement("div");
        const winnerH1 = document.createElement("h1");
    
        if (playerScore === 5) {
            winnerH1.style.color = "green";
            winnerH1.textContent = "YOU WON!";
        } else {
            winnerH1.style.color = "red";
            winnerH1.textContent = "YOU LOSE!";
        }
        
        winnerDiv.appendChild(winnerH1);
        document.body.appendChild(winnerDiv);
    }
}
