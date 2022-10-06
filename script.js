
let answer;

const compChoiceImg = document.querySelector(".compImg");
const playerChoiceImg = document.querySelector(".playerImg");
const finalResultImg = document.querySelector(".resultImg");

const resultsBoard = document.querySelector(".results");

const btnStart = document.querySelector("#btnStart");
btnStart.addEventListener("click", () => {
startAgain();
location.reload();
});

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => {
rockSelection();
playRound();
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {
  paperSelection();
  playRound();
});

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", () => {
  scissorsSelection();
  playRound();
});

let playerSelTexr = document.querySelector(".playerChoice");
let compSelText = document.querySelector(".computerChoice");
let roundResText = document.querySelector(".roundResult");
let playerScoreText = document.querySelector(".playerScore");
let compScoreText = document.querySelector(".computerScore");
let finalResText = document.querySelector(".finalResult");

function getComputerChoice(){
    let number=Math.floor(Math.random()*3);
    if (number===0) {
        compSelText.textContent = "Kitten's choice is: Rock.";
        compChoiceImg.src = "./images/rock-cat.png";
        return "Computer's choice is: Rock.";
    } else if (number===1) {
      compSelText.textContent = "Kitten's choice is: Paper.";
      compChoiceImg.src = "./images/paper-cat.png";
      return "Computer's choice is: Paper.";
    } else if (number===2) {
      compSelText.textContent =  "Kitten's choice is: Scissors.";
      compChoiceImg.src = "./images/scissors-cat.png";
       return "Computer's choice is: Scissors.";
    };
};

function startAgain() {
   btnRock.hidden = false;
   btnPaper.hidden = false;
   btnScissors.hidden = false;
   btnStart.hidden = true;
}

function rockSelection() {
  answer = "Rock";
};

function paperSelection() {
  answer = "Paper";
};

function scissorsSelection () {
  answer = "Scissors";
};

function getPlayerChoice() {
   if (answer == undefined || null || "") {
     return "You didnt choose anything..";
    } else {
    if ( answer === "Rock") {
      playerSelTexr.textContent = "You've chosen Rock!";
      playerChoiceImg.src = "./images/rock.png";
      return ("You've chosen Rock!");
    } else if (answer === "Paper") {
      playerSelTexr.textContent = "You've chosen Paper!";
      playerChoiceImg.src = "./images/paper.png";
      return "You've chosen Paper!";
    } else if (answer === "Scissors") {
      playerSelTexr.textContent = "You've chosen Scissors!";
      playerChoiceImg.src = "./images/scissors.png";
      return "You've chosen Scissors!";
    } else {
      return "Try again!";
    };
    };
};

let computerChoice; 
let playerChoice;
let roundResult;
let computerScore = 0;
let playerScore = 0;
let finalResult;

playerSelTexr.hidden = true;
playerScoreText.hidden = true;
compScoreText.hidden = true;
compSelText.hidden = true;
btnStart.hidden = true;
resultsBoard.hidden = true;

function playRound (computerChoice , playerChoice) {
  btnStart.hidden = true;
  playerSelTexr.hidden = false;
  playerScoreText.hidden = false;
  compScoreText.hidden = false;
  compSelText.hidden = false;
  resultsBoard.hidden = false;
  compScoreText.textContent = `Kitten's score is: ${computerScore}.`;
  playerScoreText.textContent = `Your score is: ${playerScore}`;
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    if ((computerChoice == "Computer's choice is: Rock." && playerChoice == "You've chosen Rock!") || 
    (computerChoice == "Computer's choice is: Paper." && playerChoice == "You've chosen Paper!") ||
    (computerChoice == "Computer's choice is: Scissors." && playerChoice == "You've chosen Scissors!")) {
      roundResText.textContent = "It's a tie!";
      return roundResult = "It's a tie!";
    } else if (computerChoice == "Computer's choice is: Rock." && playerChoice == "You've chosen Paper!") {
      roundResText.textContent ="You won! Paper beats Rock.";
       roundResult= "You won! Paper beats Rock.";
    } else if (computerChoice == "Computer's choice is: Paper." && playerChoice == "You've chosen Rock!") {
      roundResText.textContent = "You lost! Paper beats Rock.";
       roundResult = "You lost! Paper beats Rock.";
    } else if (computerChoice == "Computer's choice is: Paper." && playerChoice == "You've chosen Scissors!") {
      roundResText.textContent = "You won! Scissors beats Paper.";
       roundResult = "You won! Scissors beats Paper.";
    } else if (computerChoice == "Computer's choice is: Scissors." && playerChoice == "You've chosen Paper!") {
      roundResText.textContent = "You lost! Scissors beats Paper!";
       roundResult = "You lost! Scissors beats Paper!";
    } else if (computerChoice == "Computer's choice is: Rock." && playerChoice == "You've chosen Scissors!") {
      roundResText.textContent = "You lost! Rock beats Scissors.";
      return roundResult = "You lost! Rock beats Scissors.";
    } else if (computerChoice == "Computer's choice is: Scissors." && playerChoice == "You've chosen Rock!") {
      roundResText.textContent = "You won! Rock beats Scissors.";
       roundResult = "You won! Rock beats Scissors.";
    } else {
         roundResult = "Try again!";
    };
    countScore();
    getFinalResult();
};

function countScore() {
   if (roundResult == "You won! Paper beats Rock." || roundResult == "You won! Scissors beats Paper." || roundResult == "You won! Rock beats Scissors.") {
    playerScore = ++playerScore;
   } else if (roundResult == "You lost! Paper beats Rock." || roundResult == "You lost! Scissors beats Paper!" || roundResult == "You lost! Rock beats Scissors.") {
    computerScore = ++computerScore;
   }; 
   compScoreText.textContent = `Kitten's score is: ${computerScore}`;
   playerScoreText.textContent = `Your score is: ${playerScore}`;
   
};

function getFinalResult() {
  if (computerScore === 5 || playerScore === 5) {
  if (computerScore > playerScore) {
    finalResult = "Sorry.. Kitten beaten you in this game."
    roundResText.textContent = "";
    finalResultImg.src = "./images/cool-cat.jpg";
   } else if (computerScore < playerScore) {
    finalResult = "Yay! You won completely! But at what cost..";
    roundResText.textContent = "";
    finalResultImg.src = "./images/crying-cat.jpg";
   } else if (computerScore == playerScore){
     finalResult = "Haha lol its a tie! Try again now because kitty is bored.";
     roundResText.textContent = "";
     finalResultImg.src = "./images/cat-standing.jpeg";
   };
   finalResText.textContent = `${finalResult}`;
   btnRock.hidden = true;
   btnPaper.hidden = true;
   btnScissors.hidden = true;
   btnStart.hidden = false;
};
};