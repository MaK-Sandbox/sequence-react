import { useState } from "react";
import style from "./Board.module.css";

export default function Board({
  teams,
  setTeams,
  turnNumber,
  setTurnNumber,
  players,
  setPlayers,
  playedCard,
}) {
  const [board, setBoard] = useState(window.board);

  function isHighlighted(playedCard, cell) {
    /**
     * Red jacks means that the current player can remove any token on the board that is not a part of a requence.
     * We do not want cells with the face of "X" to be highlighted.
     */
    if (["♦️J", "♥️J"].includes(playedCard) && cell.face !== "X") {
      return cell.sequences.length === 0 && cell.token;
    }

    /**
     * Highlight any cell which face matches the selected card, as long as the cell is not already occupied by a token.
     */
    return playedCard === cell.face && !cell.token;
  }

  return (
    <div className={style["Board"]}>
      <table>
        <tbody>
          {board.map((row, rowNumber) => {
            return (
              <tr className={style["Row"]} key={rowNumber}>
                {row.map((cell, cellNumber) => {
                  return (
                    <td
                      className={`${style["Cell"]} ${
                        isHighlighted(playedCard, cell)
                          ? style["highlighted"]
                          : ""
                      }`}
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
                        const currentPlayer = players?.findIndex(
                          (p) => p.isActivePlayer
                        );
                        const playerToken = players[currentPlayer].token;

                        event.currentTarget.classList.add(playerToken);

                        newBoard[rowNumber][cellNumber].token = playerToken;

                        // console.log(`(${rowNumber}, ${cellNumber})`);
                        setBoard(newBoard);

                        const sequence = checkWinningConditions(
                          newBoard,
                          playerToken,
                          { rowNumber, cellNumber }
                        );

                        if (sequence) {
                          const copyTeams = Object.assign({}, teams);

                          const currentPlayersTeam = teams[playerToken];

                          currentPlayersTeam.sequenceCount += 1;

                          // in case the current team has accomplished 2 sequences, the game is over and should stop
                          if (currentPlayersTeam.sequenceCount === 2) {
                            alert(`${playerToken} won!`);
                            setTeams(copyTeams);
                            return;
                          }
                          setTeams(copyTeams);
                        }

                        const copyPlayers = [...players];

                        copyPlayers[currentPlayer].isActivePlayer = false;

                        if (players.length - 1 === currentPlayer) {
                          copyPlayers[0].isActivePlayer = true;
                        } else {
                          copyPlayers[currentPlayer + 1].isActivePlayer = true;
                        }

                        setPlayers(copyPlayers);

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
