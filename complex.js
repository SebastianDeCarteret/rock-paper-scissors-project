// WRITE YOUR CODE HERE
let playActions = ["rock", "paper", "scissors"];

function randomChoice() {
  return playActions[Math.floor(Math.random() * 3)];
}

function winner(player1, player2) {
  return player1 === player2
    ? "It's a tie"
    : (player1 === "rock" && player2 === "scissors") ||
      (player1 === "scissors" && player2 === "paper") ||
      (player1 === "paper" && player2 === "rock")
    ? "Player 1 Wins!"
    : "Player 2 Wins!";
}

console.log(winner(randomChoice(), randomChoice()));

// FREEZE CODE BEGIN
module.exports = {
  randomChoice,
  winner,
};
// FREEZE CODE END
