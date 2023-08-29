import { useState, useEffect } from "react";
import Player from "./Player";
import "./Players.css";
import PropTypes from "prop-types";

function Players({ turnNumber }) {
  const [players, setPlayers] = useState([
    {
      name: "Sam",
      token: window.players[0],
      startedCurrentRound: false,
      isActivePlayer: true,
    },
    {
      name: "Eva",
      token: window.players[1],
      startedCurrentRound: false,
      isActivePlayer: false,
    },
    {
      name: "Niels",
      token: window.players[2],
      startedCurrentRound: true,
      isActivePlayer: false,
    },
  ]);

  useEffect(() => {
    // create a copy of the players array so we can modify it
    const playersCopy = [...players];
    const currentPlayer = turnNumber % 3;

    console.log("turnNumber: ", currentPlayer);

    if (currentPlayer === 0) {
      playersCopy[currentPlayer + 2].isActivePlayer = false;
      playersCopy[currentPlayer].isActivePlayer = true;
    } else {
      playersCopy[currentPlayer - 1].isActivePlayer = false;
      playersCopy[currentPlayer].isActivePlayer = true;
    }

    setPlayers(playersCopy);
  }, [turnNumber]);

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
                isActivePlayer={player.isActivePlayer}
              />
            );
          })
        : null}
    </div>
  );
}

Players.propTypes = {
  turnNumber: PropTypes.number,
};

export default Players;
