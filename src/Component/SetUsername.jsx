import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { updateUsername } from "../communications";
import style from "./SetUsername.module.css";

export default function SetUsername() {
  const [tempName, setTempName] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { username } = useOutletContext();

  return (
    <div className={style["set-username"]}>
      <p
        className={isVisible ? style["hello-player"] : style["hidden"]}
      >{`Hello ${username}`}</p>
      <span className={style["set-name-container"]}>
        <h2>Choose a name</h2>
        <div className="flex-container">
          <input
            type="text"
            placeholder="Choose a name..."
            maxLength="20"
            minLength="1"
            onChange={(event) => setTempName(event.target.value)}
          />
          <button className={style["save"]}
            onClick={() => {
              setIsVisible(true);
              updateUsername(tempName);
            }}
          >
            Save
          </button>
        </div>
      </span>
    </div>
  );
}
