const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {playRound('rock')});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {playRound('paper')});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {playRound('scissors')});

const container = document.querySelector('#container');

let playerScore = 0;
let computerScore = 0;
let match = 0;

function playRound(playerSelection) {

    let computerSelection = Math.floor(Math.random() * 10)
    if (computerSelection < 4) {
        computerSelection = 'Rock'
    } else if (computerSelection > 3 && computerSelection < 7) {
        computerSelection =  'Paper'
    } else {
        computerSelection = 'Scissors'
    };

    if (((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'Scissors')) || ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'Rock'))|| ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'Paper'))){
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Player wins!';
        container.appendChild(content);
        playerScore++;
        match++;
        const pScore = document.createElement('div');
        pScore.classList.add('content');
        pScore.textContent = 'Player score: ' + playerScore;
        container.appendChild(pScore);
        const cScore = document.createElement('div');
        cScore.classList.add('content');
        cScore.textContent = 'Computer score: ' + computerScore;
        container.appendChild(cScore);
    } else if (((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'Paper')) || ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'Scissors'))|| ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'Rock'))){
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Computer wins!';
        container.appendChild(content);
        computerScore++;
        match++;
        const pScore = document.createElement('div');
        pScore.classList.add('content');
        pScore.textContent = 'Player score: ' + playerScore;
        container.appendChild(pScore);
        const cScore = document.createElement('div');
        cScore.classList.add('content');
        cScore.textContent = 'Computer score: ' + computerScore;
        container.appendChild(cScore);
    } else {
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Player draws with the computer!';
        container.appendChild(content);
        match++;
        const pScore = document.createElement('div');
        pScore.classList.add('content');
        pScore.textContent = 'Player score: ' + playerScore;
        container.appendChild(pScore);
        const cScore = document.createElement('div');
        cScore.classList.add('content');
        cScore.textContent = 'Computer score: ' + computerScore;
        container.appendChild(cScore);
    };

    if (match === 5) {

        if (playerScore > computerScore){
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'Player wins the game!';
            container.appendChild(content);
        } else if (computerScore > playerScore){
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'Computer wins the game!';
            container.appendChild(content);
        } else {
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'The game is a draw!';
            container.appendChild(content);
        }
    };
};