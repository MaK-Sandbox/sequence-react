import { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { joinTable } from "../communications";
import SetUsername from "../Component/SetUsername";
import ReadyButton from "../Component/ReadyButton";
import Lobby from "../Component/Lobby";
import "./JoinRoom.css";

export default function JoinTable() {
  const { tableId } = useParams();
  const { wsTable } = useOutletContext();

  useEffect(() => {
    joinTable(tableId);
    // console.log(wsTable);
  }, [tableId]);

  return (
    <div className="join-table">
      <Link className="back-to-main-menu" to="/">
        🡸 Go back to Main Menu
      </Link>

      {Object.keys(wsTable).length ? (
        <>
          <div className="welcome-message">
            <h2>Welcome to Sequence Online</h2>
            <p>You have been invited to join a Sequence Online game.</p>
            <p>In the section below, you can set a player name.</p>
            <p>
              When you are ready to play, press the <q>Ready?</q> button and
              wait for the other players.
            </p>
            <p>Good luck!</p>
          </div>
          <SetUsername />
          <Lobby teams={wsTable?.teams} />
          <ReadyButton />
        </>
      ) : (
        "Loading table..."
      )}
    </div>
  );
}
