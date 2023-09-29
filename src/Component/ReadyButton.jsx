import { useOutletContext } from "react-router-dom";
import { updateReady } from "../communications";
import style from "./ReadyButton.module.css";

export default function ReadyButton() {
  const { wsTable, wsReady, socket } = useOutletContext();

  return (
    <button
      className={style["ready-btn"]}
      onClick={(event) => {
        const readyCopy = !wsReady;
        updateReady(readyCopy);
        alternateButtonText(event, readyCopy, socket, wsTable);
      }}
      disabled={wsReady}
    >
      Ready?
    </button>
  );
}

function alternateButtonText(event, ready, socket, wsTable) {
  if ((ready && socket.id === wsTable.admin, wsTable)) {
    event.target.innerText = "Ready!";
  } else {
    event.target.innerText = "Waiting for other players...";
  }
}
