import { useOutletContext } from "react-router-dom";
import { updateReady } from "../communications";
import style from "./ReadyButton.module.css";

export default function ReadyButton() {
  const { wsReady } = useOutletContext();

  return (
    <button
      className={style["ready-btn"]}
      onClick={async (event) => {
        const readyCopy = !wsReady;
        updateReady(readyCopy);
        alternateButtonText(event, readyCopy);
      }}
      disabled={wsReady}
    >
      Ready?
    </button>
  );
}

function alternateButtonText(event, ready) {
  ready
    ? (event.target.innerText = "Waiting for other players...")
    : (event.target.innerText = "Ready?");
}
