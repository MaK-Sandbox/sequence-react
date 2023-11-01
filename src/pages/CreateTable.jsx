import { useOutletContext, useNavigate } from "react-router-dom";
import Lobby from "../Component/Lobby";
import { createMatch } from "../communications";
import { useEffect, useState } from "react";
import ReadyButton from "../Component/ReadyButton";
import StartButton from "../Component/StartButton";
import BackToMainMenu from "../Component/BackToMainMenu";
import style from "./CreateTable.module.css";

export default function CreateTable() {
  const [isEveryoneReady, setIsEveryoneReady] = useState(false);
  const { wsTable, socket, isConnected } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("isEveryoneReady:", isEveryoneReady);
  }, [isEveryoneReady]);

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

  useEffect(() => {
    const teams = wsTable.teams;
    let playerCount = 0;
    let readyCount = 0;

    if (!teams || !Array.isArray(teams)) {
      return;
    }

    teams.forEach((team) => {
      if (team.players.length > 0) {
        playerCount = playerCount + team.players.length;
        team.players.forEach((player) => {
          if (player.ready) readyCount++;
        });
      }
    });

    if (playerCount === readyCount && playerCount > 1) {
      setIsEveryoneReady(true);
    }
  }, [wsTable]);

  return (
    <div className={style["create-table"]}>
      <BackToMainMenu />

      {/* Wait for the match to be created on the backend and render when it's available  */}
      {Object.keys(wsTable).length ? (
        <>
          <div className={style["button-container"]}>
            <ReadyButton />
            {socket.id === wsTable.admin ? (
              <>
                <StartButton isEveryoneReady={isEveryoneReady} />
                <button
                  className={style["share"]}
                  onClick={() => copyURL(wsTable.id)}
                  title="Copy match URL to clipboard"
                >
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
