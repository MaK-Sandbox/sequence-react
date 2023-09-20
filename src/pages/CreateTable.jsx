import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import postData from "../utilities/postData";
import Lobby from "../Component/Lobby";
import "./CreateTable.css";

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
  }, [setWsTable]);

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
        {socket.id === wsTable.admin ? (
          <>
            <button>Start</button>
            <button>Invite</button>
          </>
        ) : null}
      </div>
      <div>
        Match ID: {wsTable.id}
        <Lobby players={wsTable?.players} />
      </div>
      <a href={gameLinkToUsers(wsTable.id)} target="_blank" rel="noreferrer">
        Link to game
      </a>
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

function gameLinkToUsers(matchId) {
  if (process.env.NODE_ENV == "development")
    return `http://localhost:5173/matches/join/${matchId}`;
}
