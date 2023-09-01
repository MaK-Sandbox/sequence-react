import { useState, useEffect } from "react";
import Players from "./Component/Players";
import Board from "./Component/Board";
import Cards from "./Component/Cards";
import "./App.css";

function App() {
  const [turnNumber, setTurnNumber] = useState(0);
  const [teams, setTeams] = useState(window.teams);
  const [players, setPlayers] = useState([...window.players]);
  const [drawPile, setDrawPile] = useState([...window.cards]);
  const [discardPile, setDiscardPile] = useState([]);

  useEffect(() => {
    console.log("Teams: ", teams);
  }, [teams]);

  return (
    <div className="game-view">
      <Players players={players} />
      <Board
        teams={teams}
        setTeams={setTeams}
        turnNumber={turnNumber}
        setTurnNumber={setTurnNumber}
        players={players}
        setPlayers={setPlayers}
      />
      <Cards />
    </div>
  );
}

export default App;
