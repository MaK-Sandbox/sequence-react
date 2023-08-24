import PropTypes from "prop-types";
import "./Player.css";

function Player(props) {
  const { name, token, startedCurrentRound, isActivePlayer } = props;
  return (
    <div className={isActivePlayer ? "Player Active" : "Player"}>
      <span className="Player_beginner_status" title="I started this round!">
        {startedCurrentRound ? "🔰" : null}
      </span>
      <span className="Player_name">{name}</span>
      <span className="Player_token">{token}</span>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string,
  token: PropTypes.string,
  startedCurrentRound: PropTypes.bool,
  isActivePlayer: PropTypes.bool,
};

export default Player;
