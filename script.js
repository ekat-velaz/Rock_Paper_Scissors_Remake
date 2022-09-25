
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
let roundResult;

function logResults() {
  console.log(playerChoice);
  console.log(computerChoice);
  console.log(roundResult);
};

function playRound (computerChoice , playerChoice) {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    if ((computerChoice == "Computer's choice is: Rock." && playerChoice == "You've chosen Rock!") || 
    (computerChoice == "Computer's choice is: Paper." && playerChoice == "You've chosen Paper!") ||
    (computerChoice == "Computer's choice is: Scissors." && playerChoice == "You've chosen Scissors!")) {
      return roundResult = "It's a tie!";
    } else if (computerChoice == "Computer's choice is: Rock." && playerChoice == "You've chosen Paper!") {
      return roundResult= "You won! Paper beats Rock.";
    } else if (computerChoice == "Computer's choice is: Paper." && playerChoice == "You've chosen Rock!") {
        return roundResult = "You lost! Paper beats Rock.";
    } else if (computerChoice == "Computer's choice is: Paper." && playerChoice == "You've chosen Scissors!") {
        return roundResult = "You won! Scissors beats Paper.";
    } else if (computerChoice == "Computer's choice is: Scissors." && playerChoice == "You've chosen Paper!") {
        return roundResult = "You lost! Scissors beats Paper!";
    } else if (computerChoice == "Computer's choice is: Rock." && playerChoice == "You've chosen Scissors!") {
        return roundResult = "You lost! Rock beats Scissors.";
    } else if (computerChoice == "Computer's choice is: Scissors." && playerChoice == "You've chosen Rock!") {
        return roundResult = "You won! Rock beats Scissors.";
    } else {
        return roundResult = "Try again!";
    };
    
};

let computerScore = 0;
let playerScore = 0;
let finalResult;

function game() {
 for (i = 0; i <= 5; i++) {
     console.log(playRound(computerChoice , playerChoice));
     if (roundResult == "You won! Paper beats Rock." || roundResult == "You won! Scissors beats Paper." || roundResult == "You won! Rock beats Scissors.") {
      playerScore = ++playerScore;
     } else if (roundResult == "You lost! Paper beats Rock." || roundResult == "You lost! Scissors beats Paper!" || roundResult == "You lost! Rock beats Scissors.") {
      computerScore = ++computerScore;
     };
     console.log(`Computer score is: ${computerScore}.`);
     console.log(`Your score is: ${playerScore}`);
      };
 if (computerScore > playerScore) {
  return finalResult = "Sorry.. Computer beaten you in this game."
 } else if (computerScore < playerScore) {
  return finalResult = "Yay! You won completely!";
 } else if (computerScore == playerScore){
  return finalResult = "Haha lol its a tie!";
 };
 console.log(finalResult);
};



