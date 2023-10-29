import { startMatch } from "../communications";
import style from "./StartButton.module.css";

export default function StartButton({ isEveryoneReady }) {
  return (
    <button
      className={
        isEveryoneReady ? style["start-active"] : style["start-inactive"]
      }
      onClick={() => (isEveryoneReady ? startMatch() : null)}
    >
      Start match
    </button>
  );
}
