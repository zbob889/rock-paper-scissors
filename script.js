const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {playRound('rock')});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {playRound('paper')});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {playRound('scissors')});

const container = document.querySelector('#container');


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
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Player wins';
        container.appendChild(content);
    } else if (((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'Paper')) || ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'Scissors'))|| ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'Rock'))){
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Computer wins!';
        container.appendChild(content);
    } else {
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Player draws with the computer!';
        container.appendChild(content);
    }
}