import { useEffect } from "react";
import style from "./Lobby.module.css";

export default function Lobby({ teams, setIsEveryoneReady }) {
  useEffect(() => {
    let playerCount = 0;
    let readyCounts = 0;

    /**
     * Loop through all teams.
     * Increment playerCount when a team has players with the amount of players
     * When said each player has declared themselves as ready to play, increment readyCount by 1
     */
    teams.forEach((team) => {
      if (team.players.length > 0) {
        playerCount += team.players.length;
        team.players.forEach((player) => {
          if (player.ready) readyCounts += 1;
        });
      }
    });

    /**
     * Check if all players in-game are ready to play. If they are, call setIsEveryoneReady and set the value to true
     */
    if (playerCount === readyCounts) {
      setIsEveryoneReady(true);
    }
  }, [teams, setIsEveryoneReady]);

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
