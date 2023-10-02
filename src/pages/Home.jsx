import { Link } from "react-router-dom";
import "./Home.css";
import SetUsername from "../Component/SetUsername";

export default function Home() {
  return (
    <div className="home-page">
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
      <span className="create-table-container">
        <h2>Create a new match</h2>
        <Link className="link" to="/matches/create">
          New match
        </Link>
      </span>
      <span className="join-table-container">
        <h2>Join a game</h2>
        <div className="flex-container">
          <input
            className="join-input"
            type="text"
            placeholder="Type in match id..."
            maxLength="20"
            minLength="1"
          />
          <Link className="link" to="/matches/join">
            Join match
          </Link>
        </div>
      </span>
    </div>
  );
}
