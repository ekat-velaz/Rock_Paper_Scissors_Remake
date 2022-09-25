
function getComputerChoice(){
    let number=Math.floor(Math.random()*3);
    if (number===0) {
        return "Computer's choice is: Rock.";
    } else if (number===1) {
       return "Computer's choice is: Paper.";
    } else if (number===2) {
       return "Computer's choice is: Scissors.";
    };
};

function getPlayerChoice() {
   let answer = prompt("Choose Rock, Paper or Scissors:", "You didnt choose anything..");
   if (answer == undefined || null || "") {
     return "You didnt choose anything..";
    } else {
    let caseInsensitiveAnswer = answer.toUpperCase();
    if (caseInsensitiveAnswer === "ROCK") {
      return "You've chosen Rock!";
    } else if (caseInsensitiveAnswer === "PAPER") {
      return "You've chosen Paper!";
    } else if (caseInsensitiveAnswer === "SCISSORS") {
      return "You've chosen Scissors!";
    } else {
      return "Try again!";
    }
    };
};

let computerChoice; 
let playerChoice;

function playRound (computerChoice , playerChoice) {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    if ((computerChoice == "Computer's choice is: Rock." && playerChoice == "You've chosen Rock!") || 
    (computerChoice == "Computer's choice is: Paper." && playerChoice == "You've chosen Paper!") ||
    (computerChoice == "Computer's choice is: Scissors." && playerChoice == "You've chosen Scissors!")) {
      return "It's a tie!";
    } else if (computerChoice == "Computer's choice is: Rock." && playerChoice == "You've chosen Paper!") {
      return "You won! Paper beats Rock.";
    } else if (computerChoice == "Computer's choice is: Paper." && playerChoice == "You've chosen Rock!") {
        return "You lost! Paper beats Rock.";
    } else if (computerChoice == "Computer's choice is: Paper." && playerChoice == "You've chosen Scissors!") {
        return "You won! Scissors beats Paper.";
    } else if (computerChoice == "Computer's choice is: Scissors." && playerChoice == "You've chosen Paper!") {
        return "You lost! Scissors beats Paper!";
    } else if (computerChoice == "Computer's choice is: Rock." && playerChoice == "You've chosen Scissors!") {
        return "You lost! Rock beats Scissors.";
    } else if (computerChoice == "Computer's choice is: Scissors." && playerChoice == "You've chosen Rock!") {
        return "You won! Rock beats Scissors.";
    } else {
        return "Try again!";
    }
};

let computerScore;
let playerScore;




