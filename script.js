let playerWins = 0;
let computerWins = 0;
let scoreBoard  = '';

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const scoreCard = document.getElementById('scoreCard');
const choiceImgAI = document.getElementById('choiceImgAi');
const choiceImgPlayer = document.getElementById('choiceImgPlayer');
const playerScrPara = document.getElementById('playerScrPara');
const cpuScorePara = document.getElementById('cpuScorePara');
const restartBtn = document.getElementById('restartBtn')

rockBtn.addEventListener('click', () => playerClick('ROCK'));
paperBtn.addEventListener('click', () => playerClick('PAPER'));
scissorsBtn.addEventListener('click', () => playerClick('SCISSORS'));
restartBtn.addEventListener('click', () => restartGame())

function getCompChoice(){
  let tempChoice = '';
  let tempNum = Math.floor(Math.random() * 3);
  if (tempNum === 0)
    tempChoice = 'ROCK';
  else if (tempNum === 1)
    tempChoice = 'PAPER';
  else
    tempChoice = 'SCISSORS';
  return tempChoice;
};



function playGame(playerChoice, compChoice){
  if (playerChoice ===  compChoice)
    scoreBoard = 'tie';
  else if((playerChoice === 'PAPER' && compChoice === 'ROCK') || (playerChoice === 'ROCK' && compChoice === 'SCISSORS') || (playerChoice === 'SCISSORS' && compChoice === 'PAPER')){
    playerWins++;
    scoreBoard = 'player';
  }
  else{
    computerWins++;;
    scoreBoard = 'computer';
  }
}

function updateScore() {
  if (scoreBoard === 'tie') {
    scoreCard.textContent = "It's a tie!";
  } else if (scoreBoard === 'player') {
    scoreCard.textContent = 'You won!';
  } else if (scoreBoard === 'computer') {
    scoreCard.textContent = 'You lost!';
  }

  playerScrPara.textContent = `Player: ${playerWins}`;
  cpuScorePara.textContent = `Computer: ${computerWins}`;
}

function restartGame(){
    playerScrPara.textContent = `Player: 0`;
    cpuScorePara.textContent = `Computer: 0`;
    choiceImgAI.textContent = <i class="fa-solid fa-question"></i>;
    choiceImgPlayer.textContent = <i class="fa-solid fa-question"></i>;
    scoreCard.textContent = 'New Game';
}

function playerClick(playerChoice){
    const cpuChoice = getCompChoice();
    playGame(playerChoice,cpuChoice);
    updateChoices(playerChoice, cpuChoice);
    updateScore();
} 


function updateChoices(playerChoice, compChoice) {
  switch (compChoice) {
    case 'ROCK':
      choiceImgAI.textContent = '✊'
      break
    case 'PAPER':
      choiceImgAI.textContent = '✋'
      break
    case 'SCISSORS':
      choiceImgAI.textContent = '✌'
      break
  }

  switch (playerChoice) {
    case 'ROCK':
      choiceImgPlayer.textContent = '✊'
      break
    case 'PAPER':
      choiceImgPlayer.textContent = '✋'
      break
    case 'SCISSORS':
      choiceImgPlayer.textContent = '✌'
      break
  }
}

