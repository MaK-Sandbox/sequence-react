import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { updateUsername } from "../communications";
import style from "./SetUsername.module.css";

export default function SetUsername() {
  const [tempName, setTempName] = useState("");
  const { username } = useOutletContext();

  return (
    <div className={style["set-username"]}>
      {username === "" ? null : (
        <span className={style["hello-player"]}>{`Hello ${username}!`}</span>
      )}
      <span className={style["set-name-container"]}>
        <h2>Choose a name</h2>
        <input
          type="text"
          placeholder="name"
          onChange={(event) => setTempName(event.target.value)}
        />
        <button
          onClick={() => {
            updateUsername(tempName);
          }}
        >
          SAVE
        </button>
      </span>
    </div>
  );
}
