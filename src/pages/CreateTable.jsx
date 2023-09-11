import { Link } from "react-router-dom";
import "./CreateTable.css";
import Lobby from "../Component/Lobby";

export default function CreateTable() {
  return (
    <div className="create-table">
      <div className="flex">
        <button>Ready?</button>
        <button>Start</button>
        <button>Invite</button>
      </div>

      <div>
        <Lobby />
      </div>

      <Link to="/">🡸 Go back to Main Menu</Link>
    </div>
  );
}
