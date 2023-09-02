import Player from "./Player";
import style from "./Players.module.css";

function Players({ players }) {
  return (
    <div className={style["Players"]}>
      <h2>Players</h2>
      {players?.length > 0
        ? players.map((player, index) => {
            return (
              <Player
                key={index}
                name={player.name}
                token={player.token}
                startedCurrentRound={player.startedCurrentRound}
                isActivePlayer={player.isActivePlayer}
              />
            );
          })
        : null}
    </div>
  );
}

export default Players;
