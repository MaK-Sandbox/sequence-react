import { Link, useOutletContext } from "react-router-dom";
import { startMatch } from "../communications";
import style from "./StartButton.module.css";

export default function StartButton({ isEveryoneReady }) {
  const { wsTable: match } = useOutletContext();
  return (
    <Link
      className={
        isEveryoneReady ? style["start-active"] : style["start-inactive"]
      }
      to={`/matches/match/${match.id}`}
      onClick={() => (isEveryoneReady ? startMatch() : null)}
    >
      Start match
    </Link>
  );
}
