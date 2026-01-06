let result = "";
let computerChoice = "";
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

document.querySelector(
  ".js-result"
).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

let isAutoplaying = false;
let intervalId;
function autoPlay() {
  if (!isAutoplaying) {
    intervalId = setInterval(function () {
      playerMove(["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]);
    }, 1000);
    document.querySelector(".auto-play").innerHTML = "Stop Play";
    isAutoplaying = true;
  } else{
    clearInterval(intervalId);
    isAutoplaying = false;
    document.querySelector(".auto-play").innerHTML = "Auto Play";
    return;
  }

  document.querySelector(".auto-play").innerHTML = "Stop Play";
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function playerMove(playerMove) {
  let computerMove = Math.random();

  if (computerMove < 1 / 3) {
    computerChoice = "rock";
  } else if (computerMove >= 1 / 3 && computerMove < 2 / 3) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  if (playerMove === "rock" && computerChoice === "rock") {
    result = "Tie.";
  } else if (playerMove === "rock" && computerChoice === "paper") {
    result = "You lose.";
  } else if (playerMove === "rock" && computerChoice === "scissors") {
    result = "You win.";
  }

  if (playerMove === "paper" && computerChoice === "rock") {
    result = "You win.";
  } else if (playerMove === "paper" && computerChoice === "paper") {
    result = "Tie.";
  } else if (playerMove === "paper" && computerChoice === "scissors") {
    result = "You lose.";
  }

  if (playerMove === "scissors" && computerChoice === "rock") {
    result = "You lose.";
  } else if (playerMove === "scissors" && computerChoice === "paper") {
    result = "You win.";
  } else if (playerMove === "scissors" && computerChoice === "scissors") {
    result = "Tie.";
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-result").innerHTML = `${result}`;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="../images/${playerMove}-emoji.png" alt="${playerMove}"> <img src="../images/${computerChoice}-emoji.png" alt="${computerChoice}"> Computer.`;
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
