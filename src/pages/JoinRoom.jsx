import { useEffect } from "react";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import { joinTable } from "../communications";
// import SetUsername from "../Component/SetUsername";
import ReadyButton from "../Component/ReadyButton";
import Lobby from "../Component/Lobby";
import BackToMainMenu from "../Component/BackToMainMenu";
import style from "./JoinRoom.module.css";

export default function JoinTable() {
  const { tableId } = useParams();
  const { wsTable } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    joinTable(tableId);
    // console.log(wsTable);
  }, [tableId]);

  useEffect(() => {
    if (wsTable.started) {
      navigate(`/matches/match/${wsTable.id}`);
    }
  }, [wsTable, navigate]);

  return (
    <div className={style["join-table"]}>
      <BackToMainMenu />

      {Object.keys(wsTable).length ? (
        <>
          <div className={style["welcome-message"]}>
            <h2>Welcome to Sequence Online</h2>
            <p>You have been invited to join a Sequence Online game.</p>
            <p>In the section below, you can set a player name.</p>
            <p>
              When you are ready to play, press the <q>Ready?</q> button and
              wait for the other players.
            </p>
            <p>Good luck!</p>
          </div>
          {/* <SetUsername /> */}
          <Lobby teams={wsTable?.teams} />
          <ReadyButton />
        </>
      ) : (
        "Loading table..."
      )}
    </div>
  );
}
