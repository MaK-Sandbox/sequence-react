import "./Player.css";

export default function Player({ name, token, isAdmin }) {
  return (
    <div className="Player">
      <span className="Player_beginner_status" title="I started this round!">
        {isAdmin ? "🔰" : null}
      </span>
      <span className="Player_name">{name}</span>
      <span className="Player_token">{token}</span>
    </div>
  );
}
