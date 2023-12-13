"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const changeColorBody = function (body) {
  document.querySelector("body").style.backgroundColor = body;
};
// Logic Game!

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when is not input!
  if (!guess) {
    displayMessage("🚫 No number!");

    //when user win!
  } else if (guess === secretNumber) {
    displayMessage("🎉Correct number!");
    changeColorBody("#60b347");
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").innerHTML =
      secretNumber + "<br> You  Win!";
    score--;
    displayScore(score);
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //when is to wrong!
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "⬆️Too High!" : "⬇️Too Low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("🔆You lost the game!");
      displayScore(0);
      changeColorBody("#f45428");
      document.querySelector(".number").innerHTML =
        secretNumber + "<br> You  Lost!";
      document.querySelector(".number").style.width = "30rem";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // restore secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  // restore score
  score = 20;
  displayScore(score);
  // restore message
  displayMessage("Start guessing...");
  // restore input
  document.querySelector(".guess").value = "";
  // restore bg-color
  changeColorBody("#222");
  // restore number width
  document.querySelector(".number").style.width = "15rem";
});
