import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { updateReady } from "../communications";
import style from "./ReadyButton.module.css";

export default function ReadyButton() {
  const { wsReady } = useOutletContext();

  useEffect(() => {
    console.log(wsReady);
  }, [wsReady]);

  return (
    <button
      className={wsReady ? style["ready-btn-disabled"] : style["ready-btn"]}
      onClick={(event) => {
        updateReady(true);
        if (!wsReady) event.target.innerText = "Waiting...";
      }}
    >
      Ready?
    </button>
  );
}
