import { useState } from "react";
import Player from "./Player";
import "./Players.css";

function Players() {
  const [players, setPlayers] = useState([
    { name: "Sam", token: window.players[0], startedCurrentRound: false },
    { name: "Eva", token: window.players[1], startedCurrentRound: false },
    { name: "Niels", token: window.players[2], startedCurrentRound: true },
  ]);

  return (
    <div className="Players">
      <h2>Players</h2>
      {players.length > 0
        ? players.map((player, index) => {
            return (
              <Player
                key={index}
                name={player.name}
                token={player.token}
                startedCurrentRound={player.startedCurrentRound}
              />
            );
          })
        : null}
    </div>
  );
}

export default Players;
