import PropTypes from "prop-types";
import "./Player.css";

function Player(props) {
  const { name, token, startedCurrentRound } = props;
  return (
    <div className="Player">
      <span className="Beginner">{startedCurrentRound ? "🔰 - " : null}</span>
      <span>{name}</span>
      {" - "}
      <span className="Token">{token}</span>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string,
  token: PropTypes.string,
  startedCurrentRound: PropTypes.bool,
};

export default Player;
