import { useEffect } from "react";
import Player from "./Player";
import "./Players.css";
import PropTypes from "prop-types";

function Players(props) {
  const { teams, setTeams, turnNumber } = props;

  useEffect(() => {
    // create a copy of the players array so we can modify it
    const playersCopy = [...teams];
    const currentPlayer = turnNumber % 3;

    console.log("turnNumber: ", currentPlayer);

    if (currentPlayer === 0) {
      playersCopy[currentPlayer + 2].isActivePlayer = false;
      playersCopy[currentPlayer].isActivePlayer = true;
    } else {
      playersCopy[currentPlayer - 1].isActivePlayer = false;
      playersCopy[currentPlayer].isActivePlayer = true;
    }

    setTeams(playersCopy);
  }, [turnNumber]);

  return (
    <div className="Players">
      <h2>Players</h2>
      {teams.length > 0
        ? teams.map((player, index) => {
            return (
              <Player
                key={index}
                name={player.members[0].name}
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
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      members: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        })
      ),
      token: PropTypes.string,
      startedCurrentRound: PropTypes.bool,
      isActivePlayer: PropTypes.bool,
      sequenceCount: PropTypes.number,
    })
  ),
  setTeams: PropTypes.func,
  turnNumber: PropTypes.number,
};

export default Players;
