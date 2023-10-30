import { useState } from "react";
import { Link } from "react-router-dom";
import SetUsername from "../Component/SetUsername";
import style from "./Home.module.css";

export default function Home() {
  const [tempMatchId, setTempMatchId] = useState("");

  return (
    <div className={style["home-page"]}>
      <h1>
        Welcome to <em>Sequence Online</em>
      </h1>
      <p>
        This is a free online version of the popular tabletop game{" "}
        <a
          href="https://en.wikipedia.org/wiki/Sequence_(game)"
          target="_blank"
          rel="noreferrer"
          alt="Link to Wikipedia page about Sequence"
        >
          Sequence
        </a>
        . You are now in the main menu. On this page you can choose a player
        name for yourself. Next, you can choose to either start a new match or
        join an existing one assuming you know its match id.
      </p>
      <SetUsername />
      <span className={style["create-table-container"]}>
        <h2>Create a new match</h2>
        <Link className={style["link"]} to="/matches/create">
          New match
        </Link>
      </span>
      <span className={style["join-table-container"]}>
        <h2>Join a game</h2>
        <div className={style["flex-container"]}>
          <input
            className={style["join-input"]}
            type="text"
            placeholder="Type in match id..."
            maxLength="20"
            minLength="1"
            onChange={(event) => setTempMatchId(event.target.value)}
          />
          <Link className={style["link"]} to={`/matches/join/${tempMatchId}`}>
            Join match
          </Link>
        </div>
      </span>
    </div>
  );
}
