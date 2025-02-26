const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const currentWinner = document.querySelector("#currentWinner");
const playerWins = document.querySelector("#playerWinCount");
const compWins = document.querySelector("#computerWinCount");
const comptext = document.querySelector("#computerChoice");
const playertext = document.querySelector("#playerChoice");
var coll = document.getElementsByClassName("#collapsible");
var i;

let playerWinCount = 0;
let compWinCount = 0;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });}

rock.addEventListener('click', function () {
  let computerChoice = ComputerChoice();
  let playerChoice = 0;
  playertext.textContent = "You picked rock";
  playRound(playerChoice, computerChoice);
})

paper.addEventListener('click', function () {
  let computerChoice = ComputerChoice();
  let playerChoice = 1;
  playertext.textContent = "You picked paper";
  playRound(playerChoice, computerChoice);
})

scissors.addEventListener('click', function () {
  let computerChoice = ComputerChoice();
  let playerChoice = 2;
  playertext.textContent = "You picked scissors";
  playRound(playerChoice, computerChoice);
})


function ComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);
  if (compChoice == 0) {
    comptext.textContent = "Computer selected rock";
    return 0;
  }
  else if (compChoice == 1) {
    comptext.textContent = "Computer selected paper";
    return 1;
  }
  else {
    comptext.textContent = "Computer selected scissors";
    return 2;
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    currentWinner.textContent = "Tie!";
  }
  else if (playerChoice == 0 && computerChoice == 2) {
    playerWinCount += 1;
    playerWins.textContent = playerWinCount;
    currentWinner.textContent = "Player Wins!";
  }
  else if (playerChoice == 1 && computerChoice == 0) {
    playerWinCount += 1;
    playerWins.textContent = playerWinCount;
    currentWinner.textContent = "Player Wins!";
  }
  else if (playerChoice == 2 && computerChoice == 1) {
    playerWinCount += 1;
    playerWins.textContent = playerWinCount;
    currentWinner.textContent = "Player Wins!";
  }
  else {
    compWinCount += 1;
    compWins.textContent = compWinCount;
    currentWinner.textContent = "Computer Wins!";
  }

  // Save Player win count
  localStorage.setItem('playerWins', playerWinCount);

  localStorage.setItem("computerWins", compWinCount);
}

// Load Player/Computer win count
playerWinCount = JSON.parse(localStorage.getItem('playerWins'));
compWinCount = JSON.parse(localStorage.getItem("computerWins"));

