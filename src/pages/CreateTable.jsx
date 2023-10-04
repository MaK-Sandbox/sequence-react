import { useOutletContext, useNavigate } from "react-router-dom";
import Lobby from "../Component/Lobby";
import "./CreateTable.css";
import { createMatch, startMatch } from "../communications";
import { useEffect, useState } from "react";
import ReadyButton from "../Component/ReadyButton";
import BackToMainMenu from "../Component/BackToMainMenu";

export default function CreateTable() {
  const [isEveryoneReady, setIsEveryoneReady] = useState(false);
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
      <BackToMainMenu />

      {/* Wait for the match to be created on the backend and render when it's available  */}
      {Object.keys(wsTable).length ? (
        <>
          <div className="flex">
            <ReadyButton />
            {socket.id === wsTable.admin ? (
              <>
                <button
                  className={isEveryoneReady ? "start-allready" : "start"}
                  onClick={() => startMatch()}
                >
                  Start match
                </button>
                <button className="share" onClick={() => copyURL(wsTable.id)}>
                  Copy match URL
                </button>
              </>
            ) : null}
          </div>
          <div>
            <Lobby
              teams={wsTable.teams}
              setIsEveryoneReady={setIsEveryoneReady}
            />
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

  // alert("Copied the text: " + url);
}
