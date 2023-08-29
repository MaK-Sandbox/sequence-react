import { useState } from "react";
import "./Board.css";
import PropTypes from "prop-types";

function Board(props) {
  const [board, setBoard] = useState(window.board);

  const { teams, setTeams, turnNumber, setTurnNumber } = props;

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
                      data-row={rowNumber}
                      data-cell={cellNumber}
                      key={cellNumber}
                      onClick={(event) => {
                        // if the cell is already taken, nothing happens
                        if (board[rowNumber][cellNumber].token !== null) return;
                        if (board[rowNumber][cellNumber].face === "X") return;

                        // copy board
                        const newBoard = [...board];
                        // get current player
                        const playerToken = window.tokens[turnNumber % 3];

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
                          const copyPlayers = [...teams];

                          const foundIndex = teams.findIndex(
                            (player) => player.token === playerToken
                          );
                          copyPlayers[foundIndex].sequenceCount =
                            copyPlayers[foundIndex].sequenceCount + 1;

                          setTeams(copyPlayers);
                          // alert(`${playerToken} won!`);
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
  // console.log("====================================================");
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
    let countInARow = [];
    let breakOut = false;

    for (let i = position.cellNumber - j; i < position.cellNumber + 5; i++) {
      if (token === board[position.rowNumber][i]?.token) {
        countInARow.push({ row: position.rowNumber, cell: i });
        if (countInARow.length === 5) {
          // console.log("countInARow: ", countInARow);
          sequence = true;
          break;
        }
      }

      if (token !== board[position.rowNumber][i]?.token) {
        sequence = false;
        if (i < position.cellNumber) breakOut = true;
        break;
      }
    }
    if (breakOut) break;
    if (sequence) break;
  }

  return sequence;
}

function checkVerticals(board, token, position) {
  let tokensInARow = [];

  for (let startingRow = 0; startingRow < 6; startingRow++) {
    tokensInARow = [];

    for (let n = startingRow; n < startingRow + 5; n++) {
      const cell = board[n][position.cellNumber];

      if (cell.token !== token) {
        break;
      }

      tokensInARow.push({ row: n, cell: position.cellNumber });
      if (tokensInARow.length === 5) {
        // console.log("tokensInARokw: ", tokensInARow);
        return true;
      }
    }
  }

  return false;
}

function checkDiagonals(board, token, position) {
  let sequence = false;

  //  checking \ diagonal
  for (let j = 0; j < 5; j++) {
    let tokensInARow = [];
    let breakOut = false;

    for (let i = 0; i < 5; i++) {
      const checkRow = position.rowNumber + i - j;
      const checkCell = position.cellNumber + i - j;

      if (token === board?.[checkRow]?.[checkCell]?.token) {
        tokensInARow.push({ row: checkRow, cell: checkCell });

        if (tokensInARow.length === 5) {
          // console.log("tokensInARokw: ", tokensInARow);
          sequence = true;
          break;
        }
      } else {
        sequence = false;

        if (checkRow < position.rowNumber && checkCell < position.cellNumber) {
          breakOut = true;
        }
        break;
      }
    }

    // console.log("tokensInARow, ", tokensInARow);
    if (breakOut) break;
    if (sequence) break;
  }

  if (sequence) return sequence;

  //  checking / diagonal
  for (let j = 0; j < 5; j++) {
    let tokensInARow = [];
    let breakOut = false;

    for (let i = 0; i < 5; i++) {
      const checkRow = position.rowNumber + i - j;
      const checkCell = position.cellNumber - i + j;

      if (token === board?.[checkRow]?.[checkCell]?.token) {
        tokensInARow.push({ row: checkRow, cell: checkCell });

        if (tokensInARow.length === 5) {
          // console.log("tokensInARokw: ", tokensInARow);
          sequence = true;
          break;
        }
      } else {
        sequence = false;

        if (checkRow < position.rowNumber && checkCell > position.cellNumber) {
          breakOut = true;
        }
        break;
      }
    }
    if (breakOut) break;
    if (sequence) break;
  }

  return sequence;
}

Board.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      members: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        })
      ),
      token: PropTypes.string,
      startedCurrentRound: PropTypes.bool,
      isActivePlayer: PropTypes.bool,
      sequenceCount: PropTypes.number,
    })
  ),
  setTeams: PropTypes.func,
  turnNumber: PropTypes.number,
  setTurnNumber: PropTypes.func,
};

export default Board;
