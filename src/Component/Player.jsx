import { useOutletContext } from "react-router-dom";
import style from "./Player.module.css";

export default function Player({ id, name, token, isAdmin }) {
  const { wsTable: match } = useOutletContext();
  const hasTurnClass = id === match.turn ? style.Active : "";

  return (
    <div className={`${style.Player} ${hasTurnClass}`}>
      <span
        className={style["Player_beginner_status"]}
        title="I started this round!"
      >
        {isAdmin ? "🔰" : null}
      </span>
      <span className={style["Player_name"]}>{name}</span>
      <span className={style["Player_token"]}>{token}</span>
    </div>
  );
}
