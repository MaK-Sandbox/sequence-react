import { Link, useOutletContext } from "react-router-dom";
import "./CreateTable.css";
import Lobby from "../Component/Lobby";
import { useEffect, useState } from "react";
import postData from "../utilities/postData";

export default function CreateTable() {
  const { wsTable, setWsTable, socket } = useOutletContext();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    createTable();

    async function createTable() {
      const table = await postData(`${window.API_URL}/matches/create`, {
        adminId: window.socket.id,
      });
      setWsTable(table);
    }
  }, []);

  return (
    <div className="create-table">
      <div className="flex">
        <button
          className={isReady ? "ready" : ""}
          onClick={(event) => {
            console.log("emitting message");
            socket.emit("message", "Hello from CreateTable.jsx");
            alternateIsReady(isReady, setIsReady, event);
          }}
        >
          Ready?
        </button>
        <button>Start</button>
        <button>Invite</button>
      </div>
      <div>
        Match ID: {wsTable.id}
        <Lobby players={wsTable?.players} />
      </div>

      <Link to="/">🡸 Go back to Main Menu</Link>
    </div>
  );
}

function alternateIsReady(isReady, setIsReady, event) {
  const isReadyCopy = !isReady;
  setIsReady(isReadyCopy);

  // alter button text
  isReadyCopy
    ? (event.target.innerText = "Ready!")
    : (event.target.innerText = "Ready?");
}
