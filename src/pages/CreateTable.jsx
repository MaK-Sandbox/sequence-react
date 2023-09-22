// import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import Lobby from "../Component/Lobby";
import "./CreateTable.css";
import { updateReady } from "../communications";
import { useEffect } from "react";

export default function CreateTable() {
  const { wsTable, wsReady, socket } = useOutletContext();
  // const [isReady, setIsReady] = useState(wsReady);

  useEffect(() => {
    console.log("CreateTable component:", wsReady);
  }, [wsReady]);

  return (
    <div className="create-table">
      <div className="flex">
        <button
          className={wsReady ? "ready" : ""}
          onClick={async (event) => {
            const readyCopy = !wsReady;
            updateReady(readyCopy);
            alternateButtonText(event, readyCopy);
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

function alternateButtonText(event, ready) {
  ready
    ? (event.target.innerText = "Ready!")
    : (event.target.innerText = "Ready?");
}

function gameLinkToUsers(matchId) {
  if (process.env.NODE_ENV == "development")
    return `http://localhost:5173/matches/join/${matchId}`;
}
