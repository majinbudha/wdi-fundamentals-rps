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

function getPlayerMove(move) {
    var player = move || getInput();

    return player;
}

function getComputerMove(move) {
    var computer = move || randomPlay();

    return computer;
}


function getWinner(playerMove,computerMove) {
    var winner = 'player';

    if(playerMove == computerMove) {
        winner = 'tie'
    }
    else if(computerMove == 'rock' && playerMove == 'scissors') {
        winner = 'computer'
    }
    else if (computerMove == 'scissors' && playerMove == 'paper') {
        winner = 'computer'
    }
    else if (computerMove == 'paper' && playerMove == 'rock') {
        winner = 'computer'
    }
    console.log("====================================");
    console.log(playerMove + " VS " + computerMove);
    console.log("====================================")
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");

    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);

            if (winner === 'player') {
                playerWins++;
            }
            else if (winner === 'computer'){
                computerWins++;
            }
            else {
                console.log("Tie!");
            }

        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return[playerWins, computerWins];
}
