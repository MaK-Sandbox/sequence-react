import { useOutletContext } from "react-router-dom";
import { updateReady } from "../communications";
import style from "./ReadyButton.module.css";

export default function ReadyButton() {
  const { wsReady } = useOutletContext();

  return (
    <button
      className={wsReady ? style["ready"] : ""}
      onClick={async (event) => {
        const readyCopy = !wsReady;
        updateReady(readyCopy);
        alternateButtonText(event, readyCopy);
      }}
    >
      Ready?
    </button>
  );
}

function alternateButtonText(event, ready) {
  ready
    ? (event.target.innerText = "Ready!")
    : (event.target.innerText = "Ready?");
}
