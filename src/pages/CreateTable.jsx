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
      <Link to="/">🡸 Go back to Main Menu</Link>

      <div className="flex">
        <ReadyButton />
        {socket.id === wsTable.admin ? (
          <>
            <button onClick={() => startMatch()}>Start match</button>
            <button onClick={() => copyURL(wsTable.id)}>Copy match URL</button>
          </>
        ) : null}
      </div>
      <div>
        <Lobby teams={wsTable?.teams} />
      </div>
    </div>
  );
}

function copyURL(matchId) {
  const url = `http://localhost:5173/matches/join/${matchId}`;
  navigator.clipboard.writeText(url);

  alert("Copied the text: " + url);
}
