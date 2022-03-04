// computer's move function
function computerPlay() {
  const moves = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random(0, 1) * moves.length);
  return moves[randomNumber];
}

// play a single round of rps
// Warning: long range of if else chains ahead :)
function playRound(playerSelection, computerSelection, pScore, compScore) {
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('You Lose! Paper beats Rock');
    compScore = compScore + 1;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('You Win! Rock beats Scissors');
    pScore = pScore + 1;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log('You Lose! Scissors beats Paper');
    compScore = compScore + 1;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('You Win! Paper beats Rock');
    pScore = pScore + 1;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log('You Win! Scissors beats Paper');
    pScore = pScore + 1;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log('You Lose! Scissors beats Rock');
    compScore = compScore + 1;
  }
  console.log('Your Score:', pScore, ' Computer Score:', compScore);
}

//the actual game function
function playGame() {
  let playerScore = 0;
  let compScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("What's your move?");
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection, playerScore, compScore);
    // console.log('Player Score: ', playerScore, ' Computer Score: ', compScore);
  }
  if (playerScore > compScore)
    console.log('You win! You final score:', playerScore);
  else console.log('Computer wins! Your final score:', playerScore);
}

playGame();
