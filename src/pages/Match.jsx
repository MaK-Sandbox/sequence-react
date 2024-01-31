import style from "./Match.module.css";
import Players from "../Component/Players";
import Board from "../Component/Board";
import Piles from "../Component/Piles";
import Hand from "../Component/Hand";
import Scores from "../Component/Scores";
import EndTurnButton from "../Component/EndTurnButton";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

export default function Match() {
  const [selected, setSelected] = useState("");
  const { wsTable: match } = useOutletContext();

  return (
    <div className={style["game-view"]}>
      <Players teams={match.teams} admin={match.admin} />
      <Scores teams={match.teams} />
      <Board board={match.board} selected={selected} />
      <Piles />
      <Hand setSelected={setSelected} />
      <EndTurnButton />
    </div>
  );
}
