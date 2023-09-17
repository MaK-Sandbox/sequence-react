import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [tempName, setTempName] = useState("");
  const [name, setName] = useState("");
  const { wsName, socket } = useOutletContext();

  return (
    <div className="home-page">
      {name === "" ? null : (
        <span className="hello-player">{`Hello ${wsName}`}</span>
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
            setName(tempName);
            console.log("Send player name to backend...");
            socket.emit("username", tempName);
            socket.on("username", (username) =>
              console.log("username from backend:", username)
            );
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
