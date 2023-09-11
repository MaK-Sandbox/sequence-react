import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [tempName, setTempName] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="home-page">
      <div className="container">
        {name === "" ? null : (
          <span className="hello-player">Hello {name}</span>
        )}
        <span className="set-name-container">
          <h2>Choose a name</h2>
          <input
            type="text"
            placeholder="name"
            onChange={(event) => setTempName(event.target.value)}
          />
          <button onClick={() => setName(tempName)}>SAVE</button>
        </span>
        <span className="create-table-container">
          <h2>Create new table</h2>
          <Link to="/create-table">Create table</Link>
        </span>
        <span className="join-table-container">
          <h2>Join table</h2>
          <input type="text" placeholder="table id" />
          <Link to="/join-table">JOIN</Link>
        </span>
      </div>
    </div>
  );
}
