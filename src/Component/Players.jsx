import Player from "./Player";
import style from "./Players.module.css";

export default function Players({ players }) {
  return (
    <div className={style["Players"]}>
      <h2>Players</h2>
      {players?.length > 0
        ? players.map((player, index) => {
            return (
              <Player
                key={index}
                name={player.username}
                // token={player.token}
                // startedCurrentRound={player.startedCurrentRound}
                // isActivePlayer={player.isActivePlayer}
              />
            );
          })
        : null}
    </div>
  );
}
