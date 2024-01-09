import { useEffect } from "react";
import style from "./Board.module.css";

export default function Board({ playedCard, board, selected }) {
  useEffect(() => {

    

    console.log("selected card: ", selected);
  }, [selected]);

  function isHighlighted(playedCard, cell) {
    /**
     * Black jacks mean that the current player can place a token on any free spot on the board.
     * We do not want cells with the face of "X" to be highlighted.
     */
    if (["♣️J", "♠️J"].includes(playedCard) && cell.face !== "X") {
      return !cell.token;
    }

    /**
     * Red jacks mean that the current player can remove any token on the board that is not a part of a requence.
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
                    >
                      <div className="face" data-face={cell.face}>
                        {cell.face}
                      </div>
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
