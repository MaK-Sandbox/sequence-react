import { useRef } from "react";
import style from "./Board.module.css";

export default function Board({ board, selected }) {
  const cardRef = useRef("");

  function isHighlighted(selectedCard, cell) {
    /**
     * Black jacks mean that the current player can place a token on any free spot on the board.
     * We do not want cells with the face of "X" to be highlighted.
     */
    if (["♣️J", "♠️J"].includes(selectedCard) && cell.face !== "X") {
      return !cell.token;
    }

    /**
     * Red jacks mean that the current player can remove any token on the board that is not a part of a requence.
     * We do not want cells with the face of "X" to be highlighted.
     */
    if (["♦️J", "♥️J"].includes(selectedCard) && cell.face !== "X") {
      return cell.sequences.length === 0 && cell.token;
    }

    /**
     * Highlight any cell which face matches the selected card, as long as the cell is not already occupied by a token.
     */
    return selectedCard === cell.face && !cell.token;
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
                        isHighlighted(selected, cell)
                          ? style["highlighted"]
                          : ""
                      }`}
                      data-row={rowNumber}
                      data-cell={cellNumber}
                      key={cellNumber}
                      ref={cardRef}
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
