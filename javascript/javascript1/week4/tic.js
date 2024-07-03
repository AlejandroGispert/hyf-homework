// Tic Tac Toe
// Draw a tic tac toe game.

// Write a function called getRenderedGame(position)
// that takes position as parameter.
// position is a two dimensional array that shows the position of a game.

// Here is an example:

// With the following two dimensional array

const getRenderedGame = (position) => {
  //
  let game = "";
  let winner = "";
  //array to string
  position.flat().map((value) => {
    if (value === " ") {
      game += "n";
    } else {
      game += value;
    }
  });

  //testing another method here
  //const firstRow = position[0].join("");

  const firstRow = game.slice(0, 3);
  const secondRow = game.slice(3, 6);
  const thirdRow = game.slice(6, 9);

  const firstColumn = game.slice(0, 1) + game.slice(3, 4) + game.slice(6, 7);
  const secondColumn = game.slice(1, 2) + game.slice(4, 5) + game.slice(7, 8);
  const thirdColumn = game.slice(2, 3) + game.slice(5, 6) + game.slice(8, 9);

  const diagonal = game.slice(0, 1) + game.slice(4, 5) + game.slice(8, 9);
  const antiDiagonal = game.slice(2, 3) + game.slice(4, 5) + game.slice(6, 7);

  switch (true) {
    case firstRow == "xxx" || firstRow == "ooo":
      winner = firstRow[0];
      break;
    case secondRow == "xxx" || secondRow == "ooo":
      winner = secondRow[0];
      break;
    case thirdRow == "xxx" || thirdRow == "ooo":
      winner = thirdRow[0];
      break;
    case firstColumn == "xxx" || firstColumn == "ooo":
      winner = firstColumn[0];
      break;
    case secondColumn == "xxx" || secondColumn == "ooo":
      winner = secondColumn[0];
      break;
    case thirdColumn == "xxx" || thirdColumn == "ooo":
      winner = thirdColumn[0];
      break;
    case diagonal == "xxx" || diagonal == "ooo":
      winner = diagonal[0];
      break;
    case antiDiagonal == "xxx" || antiDiagonal == "ooo":
      winner = antiDiagonal[0];
      break;
    default:
      winner = undefined;
  }
  let finalResult = {
    winner: winner,
    loser: winner === undefined ? undefined : winner === "x" ? "o" : "x",
    hasEnded: !winner,
    //hasEnded: winner != undefined ? true : false,
  };
  return finalResult;
};

const position = [
  ["x", "o", " "],
  [" ", " ", " "],
  [" ", "o", "x"],
];

const renderedGame = getRenderedGame(position);
console.log(renderedGame);
