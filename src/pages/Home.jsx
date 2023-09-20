import { Link } from "react-router-dom";
import "./Home.css";
import SetUsername from "../Component/SetUsername";
import { createMatch } from "../communications";

export default function Home() {
  return (
    <div className="home-page">
      <SetUsername />
      <span className="create-table-container">
        <h2>Create new table</h2>
        <Link
          to="/matches/create"
          onClick={() => {
            createMatch();
          }}
        >
          Create table
        </Link>
      </span>
      <span className="join-table-container">
        <h2>Join table</h2>
        <input type="text" placeholder="table id" />
        <Link to="/matches/join">Join</Link>
      </span>
    </div>
  );
}
