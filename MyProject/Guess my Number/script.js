"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector(".number").textContent = secretNumber;

// Logic Game!

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //when is not input!

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";
    //when user win!
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉Correct number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").innerHTML =
      secretNumber + "<br> You  Win!";
    score--;
    document.querySelector(".score").textContent = score;
    // highscore = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //when is to high!
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬆️Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //when user lost game!

      document.querySelector(".message").textContent = "🔆You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#f45428";
      document.querySelector(".number").innerHTML =
        secretNumber + "<br> You  Lost!";
      document.querySelector(".number").style.width = "30rem";
    }
    //when is to low!
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬇️Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // when user lost game!
      document.querySelector(".message").textContent = "🔆You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#f45428";
      document.querySelector(".number").innerHTML =
        secretNumber + "<br> You  Lost!";
      document.querySelector(".number").style.width = "30rem";
    }
  }
});
/*Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)*/

document.querySelector(".again").addEventListener("click", function () {
  // restore secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  // restore score
  score = 20;
  document.querySelector(".score").textContent = score;
  // restore message
  document.querySelector(".message").textContent = "Start guessing...";
  // restore input
  document.querySelector(".guess").value = "";
  // restore bg-color
  document.querySelector("body").style.backgroundColor = "#222";
  // restore number width
  document.querySelector(".number").style.width = "15rem";
});
