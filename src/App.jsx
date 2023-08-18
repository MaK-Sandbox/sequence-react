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
                        const newBoard = [...board];
                        if (newBoard[rowNumber][cellNumber].token !== null)
                          return;

                        event.currentTarget.classList.add(
                          window.players[turnNumber % 3]
                        );
                        newBoard[rowNumber][cellNumber].token =
                          window.players[turnNumber % 3];
                        setBoard(newBoard);
                        // const winner = checkWinningConditions(newboard);

                        setTurnNumber(turnNumber + 1);
                      }}
                    >
                      <div className="face">{cell.face}</div>
                      <div className="token">{cell.token}</div>
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

export default App;
