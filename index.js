// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(element => {
//   return Math.pow(element, 2);
// });
 
// ROCK PAPER SCISSORS

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const playerChoices = document.querySelectorAll(".choices");
const afterChosen = document.querySelector(".afterChosen");
    
const newButton = document.createElement("button"); // Players Button
const opponentChoice = document.createElement("button"); // Computers Button
const versus = document.createElement("h2"); // VS header  

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)]

  let result = "";

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  }
  else {
    playerChoices[0].style.display = 'none';
  
    switch(playerChoice) {
      case "rock":
        // Insert emoji
        newButton.textContent = "👊";
        afterChosen.insertAdjacentElement("afterbegin", newButton);
        newButton.insertAdjacentElement("afterend", opponentChoice);

        // Insert VS text
        versus.textContent = "Vs";
        opponentChoice.insertAdjacentElement("beforebegin", versus);
        opponentChoice.style.backgroundColor = "hsl(39, 100%, 50%)";

        if (computerChoice === "scissors") { 
          opponentChoice.textContent = "✂";
        } 
        else if (computerChoice === "paper") {
          opponentChoice.textContent = "✋";
        }
        
        result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        newButton.textContent = "✋";
        afterChosen.insertAdjacentElement("afterbegin", newButton);
        newButton.insertAdjacentElement("afterend", opponentChoice);

        // Insert VS text
        versus.textContent = "Vs";
        opponentChoice.insertAdjacentElement("beforebegin", versus);
        opponentChoice.style.backgroundColor = "hsl(39, 100%, 50%)";

        if (computerChoice === "scissors") { 
          opponentChoice.textContent = "✂";
        } 
        else if (computerChoice === "rock") {
          opponentChoice.textContent = "👊";
        }

        result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        newButton.textContent = "✂";
        afterChosen.insertAdjacentElement("afterbegin", newButton);
        newButton.insertAdjacentElement("afterend", opponentChoice);

        // Insert VS text
        versus.textContent = "Vs";
        opponentChoice.insertAdjacentElement("beforebegin", versus);
        opponentChoice.style.backgroundColor = "hsl(39, 100%, 50%)";

        if (computerChoice === "paper") { 
          opponentChoice.textContent = "✋";
        } 
        else if (computerChoice === "rock") {
          opponentChoice.textContent = "👊";
        }

        result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
        break;    
    }
  }

  const playAgain = document.getElementById("playAgainButton");
  playAgain.style.display = 'block';
  playAgain.textContent = "Play again";

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}

function playAgain() {
  playerChoices[0].style.display = 'block';
  
  newButton.remove();
  opponentChoice.remove();
  versus.remove();
}

//newButton.style.backgroundColor = "hsl(39, 100%, 50%)";