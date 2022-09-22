/*
0 - Rock
1 - Paper
2 - Scissors 
*/

function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    return result;
}

let computerChoice = 0;
let userInput = "";
let playerChoice = 0;

function setMatchInputs() {
    computerChoice = getComputerChoice();
    userInput = prompt("Write 'rock', 'paper', or 'scissors': ").toLowerCase();
    if (userInput === "rock") {
        playerChoice = 0;
    } else if (userInput === "paper") {
        playerChoice = 1;
    } else if (userInput === "scissors") {
        playerChoice = 2;
    } else {
        console.log("Invalid input. Try again.");
        setMatchInputs();
    }
}

function playRound(playerChoice, computerChoice) {

    switch (computerChoice) {
        case 0: console.log("Your oponent chose rock!"); break;
        case 1: console.log("Your oponent chose paper!"); break;
        case 2: console.log("Your oponent chose scissors!"); break;
    }

    if (playerChoice === computerChoice) {
        /*'d' as in 'draw'*/
        return "d";
    }

    if (playerChoice === 0) {
        if (computerChoice === 1) {
            return "l";
        } else return "w";
    } else if (playerChoice === 1) {
        if (computerChoice === 2) {
            return "l";
        } else return "w";
    } else if (playerChoice === 2) {
        if (computerChoice === 0) {
            return "l";
        } else return "w";
    }
}

function game(){
    setMatchInputs();
    let result = playRound(playerChoice, computerChoice);

    switch (result) {
        case "d": console.log("Draw."); break;
        case "l": console.log("You lose."); break;
        case "w": console.log("You win."); break;
    }
}

