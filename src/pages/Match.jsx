import style from "./Match.module.css";
import Players from "../Component/Players";
import Board from "../Component/Board";
import Piles from "../Component/Piles";
import Hand from "../Component/Hand";
import Scores from "../Component/Scores";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { dealCards } from "../communications";

export default function Match() {
  const { wsTable: match } = useOutletContext();

  useEffect(() => {
    if (match.started) {
      dealCards();
    }
  }, [match]);

  return (
    <div className={style["game-view"]}>
      <Players teams={match.teams} admin={match.admin} />
      <Scores teams={match.teams} />
      <Board board={match.board} />
      <Piles />
      <Hand />
    </div>
  );
}
