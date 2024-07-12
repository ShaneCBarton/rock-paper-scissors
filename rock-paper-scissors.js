function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    return choice === 1 ? "rock" : choice === 2 ? "paper" : "scissors";
}

console.log(getComputerChoice());