import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { updateUsername } from "../communications";
import "./Home.css";

export default function Home() {
  const [tempName, setTempName] = useState("");
  const { username } = useOutletContext();

  return (
    <div className="home-page">
      {username === "" ? null : (
        <span className="hello-player">{`Hello ${username}`}</span>
      )}
      <span className="set-name-container">
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
      <span className="create-table-container">
        <h2>Create new table</h2>
        <Link to="/matches/create">Create table</Link>
      </span>
      <span className="join-table-container">
        <h2>Join table</h2>
        <input type="text" placeholder="table id" />
        <Link to="/matches/join">Join</Link>
      </span>
    </div>
  );
}
