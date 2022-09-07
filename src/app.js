if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

const rules = document.getElementById("rules");
const rulesText = document.getElementById("rules-content");

function toggleRules() {
  rulesText.classList.toggle("hide-text");
}

const boxesArray = document.querySelectorAll(".box");
const currentPlayer = document.querySelector(".current_player");
const turnPointer = document.querySelector(".turn_pointer");
const crownIcon = document.querySelector(".crown");
const winnerBanner = document.querySelector(".winner");
const resetBtn = document.querySelector(".reset");

let claimedGridArray = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let currentTurnP1 = true;
// true = p1; false = p2

resetGame();

function resetGame() {
  currentTurnP1 = false;
  updateTurn();

  winnerBanner.classList.add("hide-text");
  crownIcon.classList.add("hidden");
  crownIcon.classList.remove("p1-win");
  crownIcon.classList.remove("p2-win");

  resetBtn.classList.add("hidden");
  turnPointer.classList.remove("hidden");
  resetBtn.innerText = "restart";

  claimedGridArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  boxesArray.forEach(function (box) {
    box.innerText = " ";
    box.classList.remove("blue_highlight");
    box.classList.remove("red_highlight");
  });

}

boxesArray.forEach(function (box) {
  box.addEventListener("click", (event) => {
    resetBtn.classList.remove("hidden");

    if (!validateMove(box)) {
      return;
    }
    insertPiece(box);
    updateClaimedGrid(box);
    if (checkVictory()) {
      // reset.classList.remove("hidden");
      resetBtn.innerText = "play again";
      return;
    }
    updateTurn();
  });
});

function validateMove(box) {
  let existing_pieces = box.innerText;
  //   console.log(existing_pieces);

  let num_Xs = existing_pieces.split("X").length - 1;
  let num_Os = existing_pieces.split("O").length - 1;

  if (num_Xs == 3) {
    console.log("this square has been fully claimed, please pick another");
    return false;
  } else if (num_Os == 3) {
    console.log("this square has been fully claimed, please pick another");
    return false;
  } else {
    return true;
  }
}

function updateClaimedGrid(box) {
  let playerNum = currentTurnP1 ? "1" : "2";
  let existing_pieces = box.innerText;

  let box_row = box.getAttribute("value")[0];
  let box_col = box.getAttribute("value")[1];

  let num_Xs = existing_pieces.split("X").length - 1;
  let num_Os = existing_pieces.split("O").length - 1;
  if (num_Xs == 3) {
    claimedGridArray[box_row][box_col] = playerNum;
    console.log("this square has been fully claimed, please pick another");
    return;
  } else if (num_Os == 3) {
    claimedGridArray[box_row][box_col] = playerNum;
    console.log("this square has been fully claimed, please pick another");
    return;
  }

  // claimedGridArray[box_row][box_col] = playerNum;
  console.log(claimedGridArray);
}

function insertPiece(box) {
  let existing_pieces = box.innerText;

  let span = document.createElement("span");
  let symbol = currentTurnP1 ? "X" : "O";
  let piece = document.createTextNode(symbol);

  currentTurnP1 ? span.classList.add("blue") : span.classList.add("red");
  span.appendChild(piece);
  box.appendChild(span);
}

function updateTurn() {
  currentTurnP1 = !currentTurnP1;
  turnPointer.c;
  // turnTextPlayer.innerHTML = currentTurn ? "1 (X)" : "2 (O)";
  // turnText.classList.toggle("red");
  currentTurnP1
    ? turnPointer.classList.remove("p2-turn")
    : turnPointer.classList.add("p2-turn");
}

function checkVictory() {
  let w1, w2, w3;
  let winnerGlow = currentTurnP1 ? "blue_highlight" : "red_highlight";

  for (let row in [0, 1, 2]) {
    if (
      claimedGridArray[row][0] > 0 &&
      claimedGridArray[row][0] == claimedGridArray[row][1] &&
      claimedGridArray[row][1] == claimedGridArray[row][2]
    ) {
      if (row == 0) {
        [w1, w2, w3] = [0, 1, 2];
      } else if (row == 1) {
        [w1, w2, w3] = [3, 4, 5];
      } else {
        [w1, w2, w3] = [6, 7, 8];
      }
      boxesArray[w1].classList.toggle(winnerGlow);
      boxesArray[w2].classList.toggle(winnerGlow);
      boxesArray[w3].classList.toggle(winnerGlow);
      displayWinner();
      return true;
    }
  }
  for (let col in [0, 1, 2]) {
    if (
      claimedGridArray[0][col] > 0 &&
      claimedGridArray[0][col] == claimedGridArray[1][col] &&
      claimedGridArray[1][col] == claimedGridArray[2][col]
    ) {
      if (col == 0) {
        [w1, w2, w3] = [0, 3, 6];
      } else if (col == 1) {
        [w1, w2, w3] = [1, 4, 7];
      } else {
        [w1, w2, w3] = [2, 5, 8];
      }
      boxesArray[w1].classList.toggle(winnerGlow);
      boxesArray[w2].classList.toggle(winnerGlow);
      boxesArray[w3].classList.toggle(winnerGlow);
      displayWinner();
      return true;
    }
  }

  if (
    claimedGridArray[0][0] > 0 &&
    claimedGridArray[0][0] == claimedGridArray[1][1] &&
    claimedGridArray[1][1] == claimedGridArray[2][2]
  ) {
    boxesArray[0].classList.toggle(winnerGlow);
    boxesArray[4].classList.toggle(winnerGlow);
    boxesArray[8].classList.toggle(winnerGlow);
    displayWinner();
    return true;
  }
  if (
    claimedGridArray[0][2] > 0 &&
    claimedGridArray[0][2] == claimedGridArray[1][1] &&
    claimedGridArray[1][1] == claimedGridArray[2][0]
  ) {
    boxesArray[2].classList.toggle(winnerGlow);
    boxesArray[4].classList.toggle(winnerGlow);
    boxesArray[6].classList.toggle(winnerGlow);
    displayWinner();
    return true;
  }

  //check for draw
  for (let row in [0, 1, 2]) {
    for (let col in [0, 1, 2]) {
      if (claimedGridArray[row][col] == 0) {
        return false;
      }
    }
  }
  winnerBanner.classList.remove("hide-text");
  winnerBanner.innerHTML = "It's a Draw!";
  turnPointer.classList.add("hidden");
  console.log("DRAW!");
  return true;
}

function displayWinner() {
  let winner = currentTurnP1 ? "One" : "Two";
  winnerBanner.classList.remove("hide-text");
  winnerBanner.innerHTML = "Player " + winner + " is the winner!";
  
  let crownWinner = currentTurnP1 ? "p1-win" : "p2-win";
  crownIcon.classList.add(crownWinner);
  crownIcon.classList.remove("hidden");
  
  turnPointer.classList.add("hidden");

  console.log("HEY WE HAVE A WINNER!" + winner);
}
