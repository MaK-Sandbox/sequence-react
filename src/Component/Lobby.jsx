import { useEffect } from "react";
import style from "./Lobby.module.css";

export default function Lobby({ teams, setIsEveryoneReady }) {
  useEffect(() => {
    let playerCount = 0;
    let readyCounts = 0;

    console.log("teams", teams);
    teams.forEach((team) => {
      if (team.players.length > 0) {
        playerCount = playerCount + team.players.length;
        team.players.forEach((player) => {
          if (player.ready) readyCounts = readyCounts + 1;
        });
      }
    });

    if (playerCount === readyCounts) {
      setIsEveryoneReady(true);
      console.log("Everyone is Ready!");
    } else {
      console.log("Not everyone is ready...");
    }
  }, [teams]);

  return (
    <div className={style["Lobby"]}>
      <h2>Connected players</h2>
      <div className={style["grid-container"]}>
        <div className={style["grid-header"]}>Team</div>
        <div className={style["grid-header"]}>Username</div>
        <div className={style["grid-header"]}>Ready</div>
      </div>
    </div>
  );
}
