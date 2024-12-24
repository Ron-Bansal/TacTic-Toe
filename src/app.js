// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("service-worker.js");
// }

// const rules = document.getElementById("rules");
// const rulesText = document.getElementById("rules-content");

// function toggleRules() {
//   rulesText.classList.toggle("hide-text");
// }

// const boxesArray = document.querySelectorAll(".box");
// const currentPlayer = document.querySelector(".current_player");
// const turnPointer = document.querySelector(".turn_pointer");
// const crownIcon = document.querySelector(".crown");
// const winnerBanner = document.querySelector(".winner");
// const resetBtn = document.querySelector(".reset");

// let claimedGridArray = [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ];

// let currentTurnP1 = true;
// // true = p1; false = p2

// // resetGame();

// function resetGame() {
//   currentTurnP1 = false;
//   updateTurn();

//   winnerBanner.classList.remove("white-bg");
//   winnerBanner.classList.add("hide-text");
//   crownIcon.classList.add("hidden");
//   crownIcon.classList.remove("p1-win");
//   crownIcon.classList.remove("p2-win");

//   resetBtn.classList.add("hidden");
//   turnPointer.classList.remove("hidden");
//   resetBtn.innerText = "restart";

//   claimedGridArray = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0],
//   ];

//   boxesArray.forEach(function (box) {
//     box.innerText = " ";
//     box.classList.remove("blue_highlight");
//     box.classList.remove("red_highlight");
//   });

// }

// boxesArray.forEach(function (box) {
//   box.addEventListener("click", (event) => {
//     resetBtn.classList.remove("hidden");

//     if (!validateMove(box)) {
//       return;
//     }
//     insertPiece(box);
//     updateClaimedGrid(box);
//     if (checkVictory()) {
//       // reset.classList.remove("hidden");
//       resetBtn.innerText = "play again";
//       return;
//     }
//     updateTurn();
//   });
// });

// function validateMove(box) {
//   let existing_pieces = box.innerText;
//   //   console.log(existing_pieces);

//   let num_Xs = existing_pieces.split("X").length - 1;
//   let num_Os = existing_pieces.split("O").length - 1;

//   if (num_Xs == 3) {
//     console.log("this square has been fully claimed, please pick another");
//     return false;
//   } else if (num_Os == 3) {
//     console.log("this square has been fully claimed, please pick another");
//     return false;
//   } else {
//     return true;
//   }
// }

// function updateClaimedGrid(box) {
//   let playerNum = currentTurnP1 ? "1" : "2";
//   let existing_pieces = box.innerText;

//   let box_row = box.getAttribute("value")[0];
//   let box_col = box.getAttribute("value")[1];

//   let num_Xs = existing_pieces.split("X").length - 1;
//   let num_Os = existing_pieces.split("O").length - 1;
//   if (num_Xs == 3) {
//     claimedGridArray[box_row][box_col] = playerNum;
//     console.log("this square has been fully claimed, please pick another");
//     return;
//   } else if (num_Os == 3) {
//     claimedGridArray[box_row][box_col] = playerNum;
//     console.log("this square has been fully claimed, please pick another");
//     return;
//   }

//   // claimedGridArray[box_row][box_col] = playerNum;
//   console.log(claimedGridArray);
// }

// function insertPiece(box) {
//   let existing_pieces = box.innerText;

//   let span = document.createElement("span");
//   let symbol = currentTurnP1 ? "X" : "O";
//   let piece = document.createTextNode(symbol);

//   currentTurnP1 ? span.classList.add("blue") : span.classList.add("red");
//   span.appendChild(piece);
//   box.appendChild(span);
// }

// function updateTurn() {
//   currentTurnP1 = !currentTurnP1;
//   turnPointer.c;
//   // turnTextPlayer.innerHTML = currentTurn ? "1 (X)" : "2 (O)";
//   // turnText.classList.toggle("red");
//   currentTurnP1
//     ? turnPointer.classList.remove("p2-turn")
//     : turnPointer.classList.add("p2-turn");
// }

// function checkVictory() {
//   let w1, w2, w3;
//   let winnerGlow = currentTurnP1 ? "blue_highlight" : "red_highlight";

//   for (let row in [0, 1, 2]) {
//     if (
//       claimedGridArray[row][0] > 0 &&
//       claimedGridArray[row][0] == claimedGridArray[row][1] &&
//       claimedGridArray[row][1] == claimedGridArray[row][2]
//     ) {
//       if (row == 0) {
//         [w1, w2, w3] = [0, 1, 2];
//       } else if (row == 1) {
//         [w1, w2, w3] = [3, 4, 5];
//       } else {
//         [w1, w2, w3] = [6, 7, 8];
//       }
//       boxesArray[w1].classList.toggle(winnerGlow);
//       boxesArray[w2].classList.toggle(winnerGlow);
//       boxesArray[w3].classList.toggle(winnerGlow);
//       displayWinner();
//       return true;
//     }
//   }
//   for (let col in [0, 1, 2]) {
//     if (
//       claimedGridArray[0][col] > 0 &&
//       claimedGridArray[0][col] == claimedGridArray[1][col] &&
//       claimedGridArray[1][col] == claimedGridArray[2][col]
//     ) {
//       if (col == 0) {
//         [w1, w2, w3] = [0, 3, 6];
//       } else if (col == 1) {
//         [w1, w2, w3] = [1, 4, 7];
//       } else {
//         [w1, w2, w3] = [2, 5, 8];
//       }
//       boxesArray[w1].classList.toggle(winnerGlow);
//       boxesArray[w2].classList.toggle(winnerGlow);
//       boxesArray[w3].classList.toggle(winnerGlow);
//       displayWinner();
//       return true;
//     }
//   }

//   if (
//     claimedGridArray[0][0] > 0 &&
//     claimedGridArray[0][0] == claimedGridArray[1][1] &&
//     claimedGridArray[1][1] == claimedGridArray[2][2]
//   ) {
//     boxesArray[0].classList.toggle(winnerGlow);
//     boxesArray[4].classList.toggle(winnerGlow);
//     boxesArray[8].classList.toggle(winnerGlow);
//     displayWinner();
//     return true;
//   }
//   if (
//     claimedGridArray[0][2] > 0 &&
//     claimedGridArray[0][2] == claimedGridArray[1][1] &&
//     claimedGridArray[1][1] == claimedGridArray[2][0]
//   ) {
//     boxesArray[2].classList.toggle(winnerGlow);
//     boxesArray[4].classList.toggle(winnerGlow);
//     boxesArray[6].classList.toggle(winnerGlow);
//     displayWinner();
//     return true;
//   }

//   //check for draw
//   for (let row in [0, 1, 2]) {
//     for (let col in [0, 1, 2]) {
//       if (claimedGridArray[row][col] == 0) {
//         return false;
//       }
//     }
//   }
//   winnerBanner.classList.remove("hide-text");
//   winnerBanner.innerHTML = "It's a Draw!";
//   turnPointer.classList.add("hidden");
//   console.log("DRAW!");
//   return true;
// }

// function displayWinner() {
//   let winner = currentTurnP1 ? "One" : "Two";
//   winnerBanner.classList.remove("hide-text");
//   winnerBanner.innerHTML = "Player " + winner + " is the winner!";

//   let crownWinner = currentTurnP1 ? "p1-win" : "p2-win";
//   crownIcon.classList.add(crownWinner);
//   crownIcon.classList.remove("hidden");

//   turnPointer.classList.add("hidden");

//   console.log("HEY WE HAVE A WINNER!" + winner);
// }

// function setPlaceholderVictory() {
//   const boxValues = [
//     "OO", // Box 1
//     "XO", // Box 2
//     "OXOXX", // Box 3
//     "OXO", // Box 4
//     "OXXOX", // Box 5
//     "XXO", // Box 6
//     "OXXX", // Box 7
//     "OXXO", // Box 8
//     "XOO" // Box 9
//   ];

//   boxesArray.forEach((box, index) => {
//     const pieces = boxValues[index];
//     const piecesArray = pieces.split("");

//     piecesArray.forEach(piece => {
//       const span = document.createElement("span");
//       const pieceText = document.createTextNode(piece);

//       if (piece === "X") {
//         span.classList.add("blue");
//       } else {
//         span.classList.add("red");
//       }

//       span.appendChild(pieceText);
//       box.appendChild(span);
//       // box.innerText += piece;
//     });
//   });

//   boxesArray[2].classList.toggle("blue_highlight");
//   boxesArray[4].classList.toggle("blue_highlight");
//   boxesArray[6].classList.toggle("blue_highlight");

//   winnerBanner.classList.remove("hide-text");
//   winnerBanner.classList.add("white-bg");
//   winnerBanner.innerHTML = "🡺  Start game  🡸";
//   winnerBanner.setAttribute("onclick", "resetGame()");

//   crownIcon.classList.add("p1-win");
//   crownIcon.classList.remove("hidden");

//   turnPointer.classList.add("hidden");
// }

// setPlaceholderVictory()

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

const rules = document.getElementById("rules");
const rulesText = document.getElementById("rules-content");

function toggleRules() {
  rulesText.classList.toggle("hide-text");
}

const boxesArray = document.querySelectorAll(".box");
const turnPointer = document.querySelector(".turn_pointer");
const crownIcon = document.querySelector(".crown");
const winnerBanner = document.querySelector(".winner");
const resetBtn = document.querySelector(".reset");
const player2Label = document.querySelector(".p2");

let claimedGridArray = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let currentTurnP1 = true;
let isAIActive = false;
let gameOver = false; // Added to stop moves after a winner is declared

document.getElementById("pvpMode").addEventListener("click", () => {
  isAIActive = false;
  player2Label.textContent = "Player 2 (O)";
  resetGame();
});

document.getElementById("aiMode").addEventListener("click", () => {
  isAIActive = true;
  player2Label.textContent = "Computer (O)";
  resetGame();
});

function resetGame() {
  currentTurnP1 = true;
  gameOver = false; // Reset game state
  claimedGridArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  winnerBanner.classList.add("hide-text");
  crownIcon.classList.add("hidden");
  resetBtn.classList.add("hidden");
  turnPointer.classList.remove("hidden");
  turnPointer.classList.remove("p2-turn");
  boxesArray.forEach((box) => {
    box.innerText = "";
    box.classList.remove("blue_highlight", "red_highlight");
  });
}

boxesArray.forEach((box) => {
  box.addEventListener("click", () => {
    if (gameOver || (isAIActive && !currentTurnP1)) return; // Stop moves if game over or AI's turn

    if (!validateMove(box)) return;

    insertPiece(box);
    updateClaimedGrid(box);

    if (checkVictory()) return;

    updateTurn();

    if (isAIActive && !currentTurnP1) {
      setTimeout(aiMove, 700); // Add delay for AI
    }
  });
});

function validateMove(box) {
  const pieces = box.innerText.split("");
  const num_Xs = pieces.filter((p) => p === "X").length;
  const num_Os = pieces.filter((p) => p === "O").length;

  return num_Xs < 3 && num_Os < 3;
}

function insertPiece(box) {
  const span = document.createElement("span");
  span.classList.add(currentTurnP1 ? "blue" : "red");
  span.innerText = currentTurnP1 ? "X" : "O";
  box.appendChild(span);
}

function updateClaimedGrid(box) {
  const [row, col] = box.getAttribute("value").split("").map(Number);
  const player = currentTurnP1 ? "1" : "2";

  if (box.innerText.split(player === "1" ? "X" : "O").length - 1 === 3) {
    claimedGridArray[row][col] = player;
  }
}

function updateTurn() {
  currentTurnP1 = !currentTurnP1;
  turnPointer.classList.toggle("p2-turn");
}

function aiMove() {
  if (gameOver) return; // Prevent AI from making moves after the game ends

  const winningMove = getWinningMove("2");
  if (winningMove) {
    makeMove(winningMove);
    return;
  }

  const blockingMove = getWinningMove("1");
  if (blockingMove) {
    makeMove(blockingMove);
    return;
  }

  const randomMove = getRandomValidMove();
  if (randomMove) {
    makeMove(randomMove);
  }
}

function makeMove(box) {
  insertPiece(box);
  updateClaimedGrid(box);
  if (checkVictory()) return;
  updateTurn();
}

function getWinningMove(player) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (claimedGridArray[row][col] === 0) {
        claimedGridArray[row][col] = player; // Simulate move
        const box = boxesArray[row * 3 + col];
        if (checkVictory(true)) {
          claimedGridArray[row][col] = 0; // Reset state
          return box;
        }
        claimedGridArray[row][col] = 0; // Reset state
      }
    }
  }
  return null;
}

function getRandomValidMove() {
  const emptySquares = [...boxesArray].filter(validateMove);
  return emptySquares[Math.floor(Math.random() * emptySquares.length)];
}

function checkVictory(isSimulated = false) {
  const winner = currentTurnP1
    ? "Player 1"
    : isAIActive
    ? "Computer"
    : "Player 2";

  // Check rows
  for (let row = 0; row < 3; row++) {
    if (
      claimedGridArray[row][0] > 0 &&
      claimedGridArray[row][0] === claimedGridArray[row][1] &&
      claimedGridArray[row][1] === claimedGridArray[row][2]
    ) {
      if (!isSimulated) {
        declareWinner(winner);
        highlightWinningRow(row, "row");
      }
      return true;
    }
  }

  // Check columns
  for (let col = 0; col < 3; col++) {
    if (
      claimedGridArray[0][col] > 0 &&
      claimedGridArray[0][col] === claimedGridArray[1][col] &&
      claimedGridArray[1][col] === claimedGridArray[2][col]
    ) {
      if (!isSimulated) {
        declareWinner(winner);
        highlightWinningColumn(col, "column");
      }
      return true;
    }
  }

  // Check diagonals
  if (
    claimedGridArray[0][0] > 0 &&
    claimedGridArray[0][0] === claimedGridArray[1][1] &&
    claimedGridArray[1][1] === claimedGridArray[2][2]
  ) {
    if (!isSimulated) {
      declareWinner(winner);
      highlightWinningDiagonal("main");
    }
    return true;
  }

  if (
    claimedGridArray[0][2] > 0 &&
    claimedGridArray[0][2] === claimedGridArray[1][1] &&
    claimedGridArray[1][1] === claimedGridArray[2][0]
  ) {
    if (!isSimulated) {
      declareWinner(winner);
      highlightWinningDiagonal("anti");
    }
    return true;
  }

  // Check for draw
  if (!isSimulated) {
    const isDraw = [...boxesArray].every((box) => !validateMove(box));
    if (isDraw) {
      declareDraw();
      return true;
    }
  }

  return false; // No winner yet
}

function declareWinner(winner) {
  gameOver = true;
  winnerBanner.innerText = `${winner} is the winner!`;
  winnerBanner.classList.remove("hide-text");
  crownIcon.classList.remove("hidden");
  turnPointer.classList.add("hidden");
  resetBtn.classList.remove("hidden");
}

function declareDraw() {
  gameOver = true;
  winnerBanner.innerText = "It's a draw!";
  winnerBanner.classList.remove("hide-text");
  turnPointer.classList.add("hidden");
  resetBtn.classList.remove("hidden");
}

function highlightWinningRow(row) {
  const start = row * 3;
  for (let i = 0; i < 3; i++) {
    boxesArray[start + i].classList.add(
      currentTurnP1 ? "blue_highlight" : "red_highlight"
    );
  }
}

function highlightWinningColumn(col) {
  for (let i = 0; i < 3; i++) {
    boxesArray[i * 3 + col].classList.add(
      currentTurnP1 ? "blue_highlight" : "red_highlight"
    );
  }
}

function highlightWinningDiagonal(type) {
  if (type === "main") {
    [0, 4, 8].forEach((index) =>
      boxesArray[index].classList.add(
        currentTurnP1 ? "blue_highlight" : "red_highlight"
      )
    );
  } else if (type === "anti") {
    [2, 4, 6].forEach((index) =>
      boxesArray[index].classList.add(
        currentTurnP1 ? "blue_highlight" : "red_highlight"
      )
    );
  }
}


function setPlaceholderVictory() {
    const boxValues = [
      "OO", // Box 1
      "XO", // Box 2
      "OXOXX", // Box 3
      "OXO", // Box 4
      "OXXOX", // Box 5
      "XXO", // Box 6
      "OXXX", // Box 7
      "OXXO", // Box 8
      "XOO" // Box 9
    ];
  
    boxesArray.forEach((box, index) => {
      const pieces = boxValues[index];
      const piecesArray = pieces.split("");
  
      piecesArray.forEach(piece => {
        const span = document.createElement("span");
        const pieceText = document.createTextNode(piece);
  
        if (piece === "X") {
          span.classList.add("blue");
        } else {
          span.classList.add("red");
        }
  
        span.appendChild(pieceText);
        box.appendChild(span);
        // box.innerText += piece;
      });
    });
  
    boxesArray[2].classList.toggle("blue_highlight");
    boxesArray[4].classList.toggle("blue_highlight");
    boxesArray[6].classList.toggle("blue_highlight");
  
    winnerBanner.classList.remove("hide-text");
    winnerBanner.classList.add("white-bg");
    winnerBanner.innerHTML = "🡺  Start game  🡸";
    winnerBanner.setAttribute("onclick", "resetGame()");
  
    crownIcon.classList.add("p1-win");
    crownIcon.classList.remove("hidden");
  
    turnPointer.classList.add("hidden");
  }
  
  setPlaceholderVictory()