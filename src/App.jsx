import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(window.board);
  const [turnNumber, setTurnNumber] = useState(0);

  return (
    <div className="board">
      <table>
        <tbody>
          {board.map((row, rowNumber) => {
            return (
              <tr className="row" key={rowNumber}>
                {row.map((cell, cellNumber) => {
                  return (
                    <td
                      className="cell"
                      key={cellNumber}
                      onClick={(event) => {
                        // if the cell is already taken, nothing happens
                        if (board[rowNumber][cellNumber].token !== null) return;
                        if (board[rowNumber][cellNumber].face === "X") return;

                        // copy board
                        const newBoard = [...board];
                        // get current player
                        const playerToken = window.players[0];

                        event.currentTarget.classList.add(playerToken);

                        newBoard[rowNumber][cellNumber].token = playerToken;

                        // console.log(`(${rowNumber}, ${cellNumber})`);
                        setBoard(newBoard);

                        const winner = checkWinningConditions(
                          newBoard,
                          playerToken,
                          { rowNumber, cellNumber }
                        );

                        if (winner) {
                          alert(`${playerToken} won!`);
                        }

                        setTurnNumber(turnNumber + 1);
                      }}
                    >
                      <div className="face">{cell.face}</div>
                      {cell.face === "X" ? null : (
                        <div className="token">{cell.token}</div>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function checkWinningConditions(board, token, position) {
  console.log("====================================================");
  // put the current player's token into corners
  board[0][0].token = token;
  board[0][9].token = token;
  board[9][0].token = token;
  board[9][9].token = token;

  if (checkHorizontals(board, token, position)) return true;
  if (checkVerticals(board, token, position)) return true;
  if (checkDiagonals(board, token, position)) return true;

  return false;
}

function checkHorizontals(board, token, position) {
  let sequence = false;

  // check horizontals
  for (let j = 0; j <= 5; j++) {
    let countInARow = 0;
    let breakOut = false;

    /*eslint for-direction: "off"*/
    for (let i = position.cellNumber + j; i >= position.cellNumber - 5; i--) {
      // console.log(`Checking (${position.rowNumber}, ${i}) (j == ${j})`);

      if (token === board[position.rowNumber][i]?.token) {
        // console.log(`Found token at (${position.rowNumber}, ${i})`);
        countInARow++;
        if (countInARow === 5) {
          sequence = true;
          break;
        }
      }

      if (token !== board[position.rowNumber][i]?.token) {
        sequence = false;
        if (i > position.cellNumber) breakOut = true;
        break;
      }
    }
    if (breakOut) break;
    if (sequence) break;
  }

  return sequence;
}

function checkVerticals(board, token, position) {
  let tokensInARow = 0;

  for (let startingRow = 0; startingRow < 6; startingRow++) {
    tokensInARow = 0;

    for (let n = startingRow; n < startingRow + 5; n++) {
      const cell = board[n][position.cellNumber];

      if (cell.token !== token) {
        break;
      }

      tokensInARow = tokensInARow + 1;
      if (tokensInARow === 5) return true;
    }
  }

  return false;
}

function checkDiagonals(board, token, position) {
  let sequence = false;
  let countInARow = 0;

  // check diagonals
  if (position.rowNumber === 0 && position.cellNumber >= 4) {
    console.log("0");

    for (let i = 0; i <= 4; i++) {
      const cell = board[i][position.cellNumber - i];

      if (cell.token === token) {
        countInARow = countInARow + 1;
      }

      if (countInARow === 5) {
        sequence = true;
      }
      console.log("Cell: ", cell);
    }
  } else {
    console.log("Run some other code...");
  }

  return sequence;
}

// function checkDiagonals(board, token, position) {}

export default App;
