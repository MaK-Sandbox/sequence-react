import { useState } from "react";
import Player from "./Player";
import "./Players.css";

function Players() {
  const [players, setPlayers] = useState([
    { name: "Sam", token: "red", startedCurrentRound: false },
    { name: "Eva", token: "blue", startedCurrentRound: false },
    { name: "Niels", token: "green", startedCurrentRound: true },
  ]);

  return (
    <div className="Players">
      {players.length > 0
        ? players.map((player, index) => {
            return <Player key={index} player={player} />;
          })
        : null}
    </div>
  );
}

export default Players;
