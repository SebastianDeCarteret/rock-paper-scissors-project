const prompt = require("prompt-sync")();
// WRITE YOUR CODE HERE
const playActions = ["rock", "paper", "scissors", "lizard", "spock"];
const yesOptions = ["Y", "y", "yes", "YES", "Yes"];
const noOptions = ["N", "n", "no", "NO", "No"];
let player1score = 0;
let player2score = 0;
let roundCount = 0;
let player1action;
let player2action;
let player1scorePerm = 0;
let player2scorePerm = 0;
let roundCountPerm = 0;
let player1Name = "";
let player2Name = "";
let isSinglePlayer = true;
let gameMode;
//prettier-ignore
const ggAsciiImage = `  ____    ____   _ 
 / ___|  / ___| | |
| |  _  | |  _  | |
| |_| | | |_| | |_|
 \\____|  \\____| (_)\n`;

play();
function play() {
  if (roundCountPerm < 10) {
    console.log(
      `\n######################################################################
Hello and welcome to Rock, Paper, Scissors (Lizard and Spock Edition)!
######################################################################\n`
    );
    //## select mode is broken ##
    /*loopUntilModeSelected();
    function loopUntilModeSelected() {
      gameMode = prompt(
        "Would you like to play SINGLE or MULTI player mode?(single/multi): "
      );
      if (
        gameMode === "" ||
        gameMode.toLowerCase() != "single" ||
        gameMode.toLowerCase() != "multi"
      ) {
        console.log(
          "Please ensure that you have entered a game mode of either:\n⇨ single\n⇨ multi \n\n########################################################"
        );
        loopUntilModeSelected();
      } else if (gameMode === "single") {
        isSinglePlayer = true;
      } else {
        isSinglePlayer = false;
      }
      console.log(gameMode);
    }*/
    //select name
    loopUntilNamesEntered();
    function loopUntilNamesEntered() {
      player1Name = prompt("Please enter a name for player 1: ");
      player2Name = prompt("Please enter a name for player 2: ");
      if (
        player1Name === "" ||
        player2Name === "" ||
        player1Name.toLowerCase() === player2Name.toLowerCase()
      ) {
        console.log(
          "⇨ Please ensure that you have at least 1 character for each player's name and that they are unique\n\n########################################################"
        );
        loopUntilNamesEntered();
      }
    }
  }
  function randomChoice() {
    return playActions[Math.floor(Math.random() * 5)];
  }

  //const name1 = player1Name.eval();
  //const name2 = eval(player2Name);

  function ScoresTable(player1score, player2score) {
    this.player1score = player1score;
    this.player2score = player2score;
    //eval(player1Name)
  }

  function endGameAndDisplayScores() {
    console.log("## Thanks for playing! ##\nFinal Scores:");
    console.table(new ScoresTable(player1score, player2score));
    console.log(
      player1score > player2score
        ? `## Congradulations ${player1Name} on the score of ${player1score}! ##`
        : player1score < player2score
        ? `## Congradulations ${player2Name} on the score of ${player2score}! ##`
        : `## It's a Draw, Time for a Rematch since you both scored ${player1score}! ##`
    );
    console.log(ggAsciiImage);
    //do they want another round?
    doTheyWantAnotherRound();
    function doTheyWantAnotherRound() {
      storeScoresAndRounds();
      let name = prompt("Do you want to play again?(y/n): ");
      if (yesOptions.includes(name.toString()) === true) {
        resetGame();
      } else if (noOptions.includes(name.toString()) === true) {
        if (roundCountPerm > 10) {
          console.log(
            `\nYou deserve a break!\n\nThe scores after ${roundCountPerm} rounds:`
          );
          console.table(new ScoresTable(player1scorePerm, player2scorePerm));

          console.log(
            player1scorePerm > player2scorePerm
              ? `## Congradulations ${player1Name} on the score of ${player1scorePerm} after ${roundCountPerm} rounds! ##`
              : player1scorePerm < player2scorePerm
              ? `## Congradulations ${player2Name} on the score of ${player2scorePerm} after ${roundCountPerm} rounds! ##`
              : `## It's a Draw, Time for a Rematch since you both scored ${player1scorePerm} after ${roundCountPerm} rounds! ##`
          );
        }
        console.log(`Bye for now!\n${ggAsciiImage}\n`);
      } else {
        console.log(
          `You didn't enter any of these acceptable values:\n⇨ ${yesOptions}\n⇨ ${noOptions}\n `
        );
        console.log("########################################################");
        doTheyWantAnotherRound();
      }
    }
  }

  function gameLoop(player1, player2) {
    console.log(`# START ROUND ${roundCount} # \nCurrent Scores:`);
    console.table(new ScoresTable(player1score, player2score));
    if (player1 === player2) {
      console.log(
        `Results of round ${roundCount}:\n⇨ Draw because ${player1} is the same as ${player2}\n`
      );
    } else if (
      (player1 === "rock" && player2 === "scissors") ||
      (player1 === "scissors" && player2 === "paper") ||
      (player1 === "paper" && player2 === "rock") ||
      (player1 === "paper" && player2 === "spock") ||
      (player1 === "lizard" && player2 === "paper") ||
      (player1 === "lizard" && player2 === "spock") ||
      (player1 === "spock" && player2 === "scissors") ||
      (player1 === "spock" && player2 === "rock") ||
      (player1 === "scissors" && player2 === "lizard") ||
      (player1 === "rock" && player2 === "lizard")
    ) {
      player1score++; //p1
      console.log(
        `Results of round ${roundCount}:\n⇨ ${player1Name} wins because ${player1} beats ${player2}\n`
      );
    } else if (
      (player2 === "rock" && player1 === "scissors") ||
      (player2 === "scissors" && player1 === "paper") ||
      (player2 === "paper" && player1 === "rock") ||
      (player2 === "paper" && player1 === "spock") ||
      (player2 === "lizard" && player1 === "paper") ||
      (player2 === "lizard" && player1 === "spock") ||
      (player2 === "spock" && player1 === "scissors") ||
      (player2 === "spock" && player1 === "rock") ||
      (player2 === "scissors" && player1 === "lizard") ||
      (player2 === "rock" && player1 === "lizard")
    ) {
      player2score++; //p2
      console.log(
        `Results of round ${roundCount}:\n⇨ ${player2Name} wins because ${player2} beats ${player1}\n`
      );
    } else {
      console.log(player1);
      console.log(player2);
      throw Error("Something ain't right");
    }
    console.log(`# END ROUND ${roundCount} #\n`);
  }

  while (roundCount < 10) {
    roundCount++;
    player1action = randomChoice();
    player2action = randomChoice();
    gameLoop(player1action, player2action);
  }
  endGameAndDisplayScores();
}

function storeScoresAndRounds() {
  //store scores after, even after 10 rounds
  player1scorePerm += player1score;
  player2scorePerm += player2score;
  roundCountPerm += roundCount;
}

function resetGame() {
  player1score = 0;
  player2score = 0;
  roundCount = 0;
  player1action = "";
  player2action = "";
  play();
}
// FREEZE CODE BEGIN
module.exports = {
  play,
  randomChoice() {},
  resetGame,
  gameLoop() {},
  endGameAndDisplayScores() {},
};
// FREEZE CODE END
