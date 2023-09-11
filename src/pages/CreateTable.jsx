import { Link, useOutletContext } from "react-router-dom";
import "./CreateTable.css";
import Lobby from "../Component/Lobby";
import { useEffect, useState } from "react";

export default function CreateTable() {
  const [table, setTable] = useState({});
  const [wsMessage, socket] = useOutletContext();

  useEffect(() => {
    createTable();

    async function createTable() {
      const response = await fetch(`${window.API_URL}/matches/create`, {
        method: "POST",
      });
      if (!response.ok) {
        // handle error
        return;
      }
      const table = await response.json();
      setTable(table);
    }
  }, []);

  return (
    <div className="create-table">
      <div className="flex">
        <button
          onClick={() => {
            console.log("emitting message");
            socket.emit("message", "Hello from CreateTable.jsx");
          }}
        >
          Ready?
        </button>
        <button>Start</button>
        <button>Invite</button>
      </div>
      {wsMessage}
      <div>
        <Lobby players={table?.players} />
      </div>

      <Link to="/">🡸 Go back to Main Menu</Link>
    </div>
  );
}
