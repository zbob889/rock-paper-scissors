function computerPlay(){
    let computerMove = Math.floor(Math.random() * 10)
    if (computerMove < 4) {
        return 'Rock'
    } else if (computerMove > 3 && computerMove < 7) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function playRound(playerSelection) {

    let computerSelection = Math.floor(Math.random() * 10)
    if (computerSelection < 4) {
        computerSelection = 'Rock'
    } else if (computerSelection > 3 && computerSelection < 7) {
        computerSelection =  'Paper'
    } else {
        computerSelection = 'Scissors'
    }

    if (((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'Scissors')) || ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'Rock'))|| ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'Paper'))){
        return 'Player wins!'
    } else if (((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'Paper')) || ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'Scissors'))|| ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'Rock'))){
        return 'Player loses!'
    } else {
        return 'Draw!'
    }
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {playRound('rock')});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {playRound('paper')});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {playRound('scissors')});



function game() { 

    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt('Rock, Paper, or Scissors?')

        let computerSelection = Math.floor(Math.random() * 10)
        if (computerSelection < 4) {
        computerSelection = 'Rock'
        } else if (computerSelection > 3 && computerSelection < 7) {
        computerSelection =  'Paper'
        } else {
        computerSelection = 'Scissors'
        }

        if (((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'Scissors')) || ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'Rock'))|| ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'Paper'))){
            if (i === 0) {
                console.log('Play wins round 1!'); playerScore++
            } else if (i === 1) {
                console.log('Player wins round 2!'); playerScore++
            } else if (i === 2) {
                console.log('Player wins round 3!'); playerScore++
            } else if (i === 3) {
                console.log('Player wins round 4!'); playerScore++
            } else {
                console.log('Player wins round 5!'); playerScore++
            }
        } else if (((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'Paper')) || ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'Scissors'))|| ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'Rock'))){
            if (i === 0) {
                console.log('Play loses round 1!'); computerScore++
            } else if (i === 1) {
                console.log('Player loses round 2!'); computerScore++
            } else if (i === 2) {
                console.log('Player loses round 3!'); computerScore++
            } else if (i === 3) {
                console.log('Player loses round 4!'); computerScore++
            } else {
                console.log('Player loses round 5!'); computerScore++
            }
        } else {
            if (i === 0) {
                console.log('Round 1 is a draw!')
            } else if (i === 1) {
                console.log('Round 2 is a draw!')
            } else if (i === 2) {
                console.log('Round 3 is a draw!')
            } else if (i === 3) {
                console.log('Round 4 is a draw!')
            } else {
                console.log('Round 5 is a draw!')
            }
        }
        
        console.log('Player score: ' + playerScore)
        console.log('Computer score: ' + computerScore)

        if (i === 4) {
            if (playerScore > computerScore) {
                console.log('Player wins the game!')
            } else if (computerScore > playerScore) {
                console.log('Player loses the game!')
            } else {
                console.log('Player draws with the computer!')
            }
        }

    }
}