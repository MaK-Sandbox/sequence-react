import PropTypes from "prop-types";
import "./Player.css";

function Player(props) {
  const { name, token, startedCurrentRound } = props;
  return (
    <div className="Player">
      <span className="Player_beginner_status">
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
};

export default Player;
