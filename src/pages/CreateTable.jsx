// import { useState } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import Lobby from "../Component/Lobby";
import "./CreateTable.css";
import { startMatch } from "../communications";
import { useEffect } from "react";
import ReadyButton from "../Component/ReadyButton";

export default function CreateTable() {
  const { wsTable, socket } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (wsTable.started) {
      navigate("/matches/match");
    }
  }, [wsTable, navigate]);

  return (
    <div className="create-table">
      <div className="flex">
        <ReadyButton />
        {socket.id === wsTable.admin ? (
          <>
            <button onClick={() => startMatch()}>Start</button>
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

function gameLinkToUsers(matchId) {
  if (process.env.NODE_ENV == "development")
    return `http://localhost:5173/matches/join/${matchId}`;
}
