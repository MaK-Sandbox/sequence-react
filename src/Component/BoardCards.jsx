import { playSelectedCard } from "../communications";
import style from "./BoardCards.module.css";

export default function BoardCards({ cell, cellNumber, rowNumber, selected }) {
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

  function isSpaceOccupied(cell) {
    if (cell.token === null) return false;
    return true;
  }

  return (
    <td
      className={`${style.Cell} ${
        isSpaceOccupied(cell) ? style[cell.token] : ""
      }${isHighlighted(selected, cell) ? style["highlighted"] : ""}`}
      data-row={rowNumber}
      data-cell={cellNumber}
      key={cellNumber}
      onClick={() => playSelectedCard(selected, rowNumber, cellNumber)}
    >
      <div className="face" data-face={cell.face}>
        {cell.face}
      </div>
      {cell.face === "X" ? null : <div className="token">{cell.token}</div>}
    </td>
  );
}
