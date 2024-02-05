import BoardCards from "./BoardCards";
import style from "./Board.module.css";

export default function Board({ board, selected }) {
  return (
    <div className={style["Board"]}>
      <table>
        <tbody>
          {Array.isArray(board)
            ? board.map((row, rowNumber) => {
                return (
                  <tr className={style.Row} key={rowNumber}>
                    {row.map((cell, cellNumber) => {
                      return (
                        <BoardCards
                          key={cellNumber}
                          cell={cell}
                          cellNumber={cellNumber}
                          rowNumber={rowNumber}
                          selected={selected}
                        />
                      );
                    })}
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}
