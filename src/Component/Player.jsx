import "./Player.css";

export default function Player(props) {
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
