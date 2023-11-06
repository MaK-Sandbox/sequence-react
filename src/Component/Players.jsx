import { useOutletContext } from "react-router-dom";
import Player from "./Player";
import style from "./Players.module.css";

export default function Players({ teams }) {
  const { wsTable } = useOutletContext();

  return (
    <div className={style["Players"]}>
      <h2>Players</h2>
      {teams?.length > 1
        ? teams.map((team, i) => {
            return team.players.map((player, j) => {
              return (
                <Player
                  key={i * 10 + j}
                  name={player.username}
                  token={team.token}
                  startedCurrentRound={
                    player.id === wsTable.turnOrder[0] ? true : false
                  }
                  isActivePlayer={player.isActivePlayer}
                />
              );
            });
          })
        : null}
    </div>
  );
}
