import { useState } from "react";
import style from "./App.module.css";
import Players from "./Component/Players";
import Board from "./Component/Board";
import Piles from "./Component/Piles";
import Hand from "./Component/Hand";
import Scores from "./Component/Scores";

export default function App() {
  const [turnNumber, setTurnNumber] = useState(0);
  const [teams, setTeams] = useState(window.teams);
  const [players, setPlayers] = useState([...window.players]);
  const [drawPile, setDrawPile] = useState([...window.cards]);
  // const [discardPile, setDiscardPile] = useState([]);
  const [playedCard, setPlayedCard] = useState("");

  return (
    <div className={style["game-view"]}>
      <Players players={players} />
      <Scores teams={teams} />
      <Board
        teams={teams}
        setTeams={setTeams}
        turnNumber={turnNumber}
        setTurnNumber={setTurnNumber}
        players={players}
        setPlayers={setPlayers}
        playedCard={playedCard}
      />
      <Piles drawCard={drawCard} />
      <Hand
        cards={players.find((p) => p.isYou).cards}
        setPlayedCard={setPlayedCard}
      />
    </div>
  );

  function drawCard() {
    const pile = [...drawPile];
    const card = pile.pop();

    setDrawPile(pile);
    return card;
  }
}
