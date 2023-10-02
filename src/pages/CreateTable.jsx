// import { useState } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import Lobby from "../Component/Lobby";
import "./CreateTable.css";
import { createMatch, startMatch } from "../communications";
import { useEffect } from "react";
import ReadyButton from "../Component/ReadyButton";

export default function CreateTable() {
  const { wsTable, socket, isConnected } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    // once we're connected, create match
    if (isConnected) {
      createMatch();
    }
  }, [isConnected]);

  useEffect(() => {
    if (wsTable.started) {
      navigate("/matches/match");
    }
  }, [wsTable, navigate]);

  return (
    <div className="create-table">
      <Link to="/">🡸 Go back to Main Menu</Link>

      {/* Wait for the match to be created on the backend and render when it's available  */}
      {Object.keys(wsTable).length ? (
        <>
          <div className="flex">
            <ReadyButton />
            {socket.id === wsTable.admin ? (
              <>
                <button onClick={() => startMatch()}>Start match</button>
                <button onClick={() => copyURL(wsTable.id)}>
                  Copy match URL
                </button>
              </>
            ) : null}
          </div>
          <div>
            <Lobby teams={wsTable.teams} />
          </div>
        </>
      ) : (
        "Creating table..."
      )}
    </div>
  );
}

function copyURL(matchId) {
  const url = `http://localhost:5173/matches/join/${matchId}`;
  navigator.clipboard.writeText(url);

  alert("Copied the text: " + url);
}
