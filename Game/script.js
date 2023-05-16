
  var userScore = 0;
  var computerScore = 0;

  document.getElementById("rock").addEventListener("click", function() {
   play("rock");
  });

  document.getElementById("paper").addEventListener("click", function() {
   play("paper");
  });

  document.getElementById("scissors").addEventListener("click", function() {
   play("scissors");
  });

  function play(userChoice) {
   var computerChoice = Math.random();
   if (computerChoice < 0.34) {
    computerChoice = "rock";
   } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
   } else {
    computerChoice = "scissors";
   }

   var result = compare(userChoice, computerChoice);

   document.getElementById("result").innerHTML = "You chose " + userChoice + ", the computer chose " + computerChoice + ". " + result;
  }

  function compare(choice1, choice2) {
   if (choice1 === choice2) {
    return "It's a tie!";
   } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
     userScore++;
     return "You win! Rock beats scissors.";
    } else {
     computerScore++;
     return "You lose! Paper beats rock.";
    }
   } else if (choice1 === "paper") {
    if (choice2 === "rock") {
     userScore++;
     return "You win! Paper beats rock.";
    } else {
     computerScore++;
     return "You lose! Scissors beats paper.";
    }
   } else if (choice1 === "scissors") {
    if (choice2 === "paper") {
     userScore++;
     return "You win! Scissors beats paper.";
    } else {
     computerScore++;
     return "You lose! Rock beats scissors.";
    }
   }
  }
 