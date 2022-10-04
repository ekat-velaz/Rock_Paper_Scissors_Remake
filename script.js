
let answer;

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
        compSelText.textContent = "Computer's choice is: Rock.";
        return "Computer's choice is: Rock.";
    } else if (number===1) {
      compSelText.textContent = "Computer's choice is: Paper.";
       return "Computer's choice is: Paper.";
    } else if (number===2) {
      compSelText.textContent =  "Computer's choice is: Scissors.";
       return "Computer's choice is: Scissors.";
    };
};

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
      return ("You've chosen Rock!");
    } else if (answer === "Paper") {
      playerSelTexr.textContent = "You've chosen Paper!";
      return "You've chosen Paper!";
    } else if (answer === "Scissors") {
      playerSelTexr.textContent = "You've chosen Scissors!";
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


function playRound (computerChoice , playerChoice) {
  compScoreText.textContent = `Computer score is: ${computerScore}.`;
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
   compScoreText.textContent = `Computer score is: ${computerScore}.`;
   playerScoreText.textContent = `Your score is: ${playerScore}`;
};

function getFinalResult() {
  if (computerScore === 5 || playerScore === 5) {
  if (computerScore > playerScore) {
    finalResult = "Sorry.. Computer beaten you in this game."
   } else if (computerScore < playerScore) {
    finalResult = "Yay! You won completely!";
   } else if (computerScore == playerScore){
     finalResult = "Haha lol its a tie!";
   };
   finalResText.textContent = `${finalResult}`;
  };
};

