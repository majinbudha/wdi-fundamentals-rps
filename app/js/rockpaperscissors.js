////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}



function getPlayerMove(move) {
    var player = move || getInput();

    return player;
}

function getComputerMove(move) {
    var cpu = move || randomPlay();

    return cpu;
}




function getWinner(playerMove,computerMove) {
    var winner = 'player';

    if(playerMove == computerMove) {
        winner = 'tie'
    }
    else if(computerMove == 'rock' && playerMove == 'scissors') {
        winner = 'cpu'
    }
    else if (computerMove == 'scissors' && playerMove == 'paper') {
        winner = 'cpu'
    }
    else if (computerMove == 'paper' && playerMove == 'rock') {
        winner = 'cpu'
    }
    console.log("====================================");
    console.log(playerMove + " VS " + computerMove);
    console.log("====================================")
    return winner;
}
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

