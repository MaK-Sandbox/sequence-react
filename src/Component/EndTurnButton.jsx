import { endTurn } from "../communications";
import style from "./EndTurnButton.module.css";

export default function EndTurnButton() {
  return (
    <div className={style.EndTurnButton}>
      <button onClick={() => endTurn()}>End turn</button>
    </div>
  );
}
