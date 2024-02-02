import Player from "./Player";
import style from "./Players.module.css";

export default function Players({ teams, admin }) {
  return (
    <div className={style["Players"]}>
      <h2>Players</h2>
      {teams?.length > 1
        ? teams.map((team, i) => {
            return team.players?.length > 0
              ? team.players.map((player, j) => {
                  return (
                    <Player
                      key={admin + i + j}
                      id={player.id}
                      name={player.username}
                      token={team.token}
                      isAdmin={admin === player.id}
                    />
                  );
                })
              : null;
          })
        : null}
    </div>
  );
}
