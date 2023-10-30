import style from "./Lobby.module.css";
import { useOutletContext } from "react-router-dom";

export default function Lobby({ teams }) {
  const { socket, wsTable } = useOutletContext();

  return (
    <div className={style["Lobby"]}>
      <div className="flex-container">
        <h2>Connected players</h2>
        <h3>{`Match-Id: ${wsTable.id}`}</h3>
      </div>
      <div className={style["grid-container"]}>
        <div className={style["grid-header"]}>Team</div>
        <div className={style["grid-header"]}>Username</div>
        <div className={style["grid-header"]}>Ready</div>
        {teams.map((team) => {
          return team.players.length > 0
            ? team.players.map((player, index) => {
                return [
                  <div
                    key={index * 10}
                    data-playerid={player.id}
                    className={
                      player.id === socket.id
                        ? style["highlight-left-edge"]
                        : null
                    }
                  >
                    {team.token}
                  </div>,
                  <div
                    key={index * 10 + 1}
                    data-playerid={player.id}
                    className={
                      player.id === socket.id ? style["highlight"] : null
                    }
                  >
                    {player.id === socket.id
                      ? `${player.username} (You)`
                      : player.username}
                  </div>,
                  <div
                    key={index * 10 + 2}
                    data-playerid={player.id}
                    className={
                      player.id === socket.id
                        ? style["highlight-right-edge"]
                        : null
                    }
                  >{`${player.ready}`}</div>,
                ];
              })
            : null;
        })}
      </div>
    </div>
  );
}
