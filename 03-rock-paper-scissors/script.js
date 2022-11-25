let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let pick = Math.floor(Math.random() * options.length);
  return options[pick];
}

function checkWinner(playerSelection, computerSelection) {
  // playerSelection = playerSelection.toLowerCase()

  if (playerSelection == computerSelection) {
    return "tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "player";
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    return "computer";
  } else {
    return console.log("InvalidInput");
  }
}

function playRound(playerSelection, computerSelection) {
  let reuslt = checkWinner(playerSelection, computerSelection);

  if (reuslt == "player") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (reuslt == "computer") {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (reuslt == "tie") {
    return "it's a tie";
  } else {
    return console.log("InvalidInput2");
  }
}

function getPlayerSelection() {
  let correctAns = false;
  while (correctAns == false) {
    let pick = prompt("rock, paper, or scissors").toLowerCase();
    if (pick == null) {
      continue;
    } else if (options.includes(pick)) {
      correctAns = true;
      return pick;
    } else {
      continue;
    }
  }
}

function game() {
  let playerScore = 0;
  let comScore = 0;

  for (let i = 0; i < 5; i++) {
    // your code here!
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    if (checkWinner(playerSelection, computerSelection) == "player") {
      playerScore++;
    } else if (checkWinner(playerSelection, computerSelection) == "computer") {
      comScore++;
    } else if (checkWinner(playerSelection, computerSelection) == "tie") {
      playerScore++;
      comScore++;
    }

    console.log("playerScore:", playerScore, "ComputerScore:", comScore);
    console.log("--------");
  }

  if (playerScore > comScore) {
    console.log("Players Wins");
  } else if (comScore > playerScore) {
    console.log("computer wins");
  } else console.log("It's a tie");
}

game();
