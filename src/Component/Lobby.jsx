import style from "./Lobby.module.css";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Lobby({ teams }) {
  const [isInEditMode, setIsInEditmode] = useState(false);
  const { socket, wsTable } = useOutletContext();

  useEffect(() => {
    console.log("isInEditMode: ", isInEditMode);
  }, [isInEditMode]);

  return (
    <div className={style["Lobby"]}>
      <div className={style["flex-container"]}>
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
                    onMouseEnter={() =>
                      player.id === socket.id
                        ? toggleEditMode(player.id, socket.id)
                        : null
                    }
                    onMouseLeave={() =>
                      player.id === socket.id
                        ? toggleEditMode(player.id, socket.id)
                        : null
                    }
                  >
                    {displayOfUsername(player, socket)}
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

  function displayOfUsername(player, socket) {
    if (isInEditMode && player.id === socket.id) {
      return `${player.username} (You)✏️`;
    }

    if (player.id === socket.id) {
      return `${player.username} (You)`;
    }

    return `${player.username}`;
  }

  function toggleEditMode(playerId, socketId) {
    // firstly, test if the username belongs to the current player
    if (playerId === socketId) {
      //assuming we have the current player, toggle value of isInEditMode
      const currentValue = isInEditMode;
      setIsInEditmode(!currentValue);
    }
  }
}
