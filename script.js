/*-------
------FASE DI PREPARAZIONE--------
                           -------*/

//recupero dalla pagina tutti gli elementi di interessi

const scoreCounter = document.querySelector(".score-counter");
const grid = document.querySelector(".grid");
const endGameScreen = document.querySelector(".end-game-screen");
const endGameText = document.querySelector(".end-game-text");
const playAgainButton = document.querySelector(".play-again");

//Preparo informazioni della logica di gioco

const totalCells = 100;
const totalBombs = 16;
const maxScore = totalCells - totalBombs;
const bombsList = [];
let score = 0;

//Generare random bomb

while (bombsList.length < totalBombs) {
  const number = Math.floor(Math.random() * totalCells) + 1;
  if (!bombsList.includes(number)) bombsList.push(number);
  // console.log(number)
}
console.log(bombsList);

/*-----------------------
GRIGLIA E LOGICA DI GIOCO
-----------------------*/
let isCellEven = false;
let isRowEven = false;
for (let i = 1; i <= totalCells; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  //   cell.innerHTML = i;

  isCellEven = i % 2 === 0;

  //Se la riga e pari e la cella e pari: casella grigia
  if (isRowEven && isCellEven) cell.classList.add("cell-dark");
  // se la riga e dispari e la cella e dispari: casella grigia
  else if (!isRowEven && !isCellEven) cell.classList.add("cell-dark");

  //se sono alla fine della riga...
  if (i % 10 === 0) isRowEven = !isRowEven;

  //gestiamo il click della casella
  cell.addEventListener("click", function () {
    if (cell.classList.contains("cell-clicked")) return;
    if (bombsList.includes(i)) {
      cell.classList.add("cell-bomb");
      endGame(false);
    } else {
      cell.classList.add("cell-clicked");
      updateScore();
    }
  });
  //lo inserisco nella griglia
  grid.appendChild(cell);
}

/* FUNZIONI */

/* funzione per aggiornare il punteggio */

function updateScore() {
  score++;
  scoreCounter.innerHTML = String(score).padStart(3, 0);
  if (score === maxScore) endGame(true);
}

function endGame(isVictory) {
  if (isVictory === true) {
    endGameScreen.classList.add("win");
    endGameText.innerHTML = "YOU<br>WIN";
  } else {
    revealAllBombs();
  }
  endGameScreen.classList.remove("hidden");
}

function revealAllBombs() {
  const cells = document.querySelectorAll(".cell");
  for (let i = 1; i <= cells.length; i++) {
    if (bombsList.includes(i)) {
      const cellToReavel = cells[i - 1];
      cellToReavel.classList.add("cell-bomb");
    }
  }
}

//-----------Event---------

playAgainButton.addEventListener("click", function () {
  location.reload();
});
