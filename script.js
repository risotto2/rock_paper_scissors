/*
0 - Rock
1 - Paper
2 - Scissors 
*/

function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    return result;
}


let nextButton = document.getElementById('next');
let previousButton = document.getElementById('previous');
let main = document.getElementById('main');
let startMatch = document.getElementById('startMatch');
let opponentChoice = document.getElementById('opponentChoice');
let gameOverMessage = document.getElementById('gameOverMessage');
let scoreCounter = document.getElementById('score')

let choiceArray = [
    'Rock ' + String.fromCodePoint(0x270A),
    'Paper ' + String.fromCodePoint(0x270B),
    'Scissors ' + String.fromCodePoint(0x270C)
    
    
]
let arrayIndex = 0;

let computerChoice = 0;
let userInput = "";
let playerChoice = arrayIndex;
let score = 0;
let matchCounter = 0;

scoreCounter.textContent = 'Score: ' + score + ' | Match count: ' + matchCounter;

main.textContent = choiceArray[arrayIndex];
nextButton.addEventListener('click', arrayIteration);
previousButton.addEventListener('click', reverseArrayIteration)
startMatch.addEventListener('click', game)

function arrayIteration() {
    if (arrayIndex == 2) {
        arrayIndex = 0;
        main.textContent = choiceArray[arrayIndex];
        playerChoice = arrayIndex;
    } else {
        arrayIndex++;
        main.textContent = choiceArray[arrayIndex];
        playerChoice = arrayIndex;
    }
}

function reverseArrayIteration() {
    if (arrayIndex == 0) {
        arrayIndex = 2;
        main.textContent = choiceArray[arrayIndex];
        playerChoice = arrayIndex;
    } else {
        arrayIndex--;
        main.textContent = choiceArray[arrayIndex];
        playerChoice = arrayIndex;
    }
}


function setMatchInputs() {
    computerChoice = getComputerChoice();
}

function playRound(playerChoice, computerChoice) {

    switch (computerChoice) {
        case 0: opponentChoice.textContent = "Your opponent chose rock!"; break;
        case 1: opponentChoice.textContent = "Your opponent chose paper!"; break;
        case 2: opponentChoice.textContent = "Your opponent chose scissors!"; break;
    }

    if (playerChoice === computerChoice) {
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
        case "d": 
            gameOverMessage.textContent = "Draw."; gameOverMessage.style.color = 'black';
            matchCounter++;
            scoreCounter.textContent = "Score: " + score + " | Match count: " + matchCounter;
            opponentChoice.style.color = 'black';
            break;
        case "l": 
            gameOverMessage.textContent = "You lose."; gameOverMessage.style.color = 'red';
            matchCounter++;
            scoreCounter.textContent = "Score: " + score + " | Match count: " + matchCounter;
            opponentChoice.style.color = 'red'; break;
        case "w":
            gameOverMessage.textContent = "You win"; gameOverMessage.style.color = "green";
            score++;
            matchCounter++;
            scoreCounter.textContent = "Score: " + score + " | Match count: " + matchCounter;
            opponentChoice.style.color = 'green'; break;
    }
}
