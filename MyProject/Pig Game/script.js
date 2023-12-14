'use strict';
// Get element
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;

// rolling dice functionality

btnRoll.addEventListener('click', function () {
  //generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // check for roller 1
  if (dice !== 1) {
    // add current score
    currentScore += dice;
    current0El.textContent = currentScore; //CHANGE LATER
  } else {
    //switch to the next player
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
    currentScore += dice;
    score0El.textContent = currentScore - 1;
  }
});
