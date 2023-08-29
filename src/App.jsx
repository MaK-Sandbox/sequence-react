import { useState, useEffect } from "react";
import Players from "./Component/Players";
import Board from "./Component/Board";
import Cards from "./Component/Cards";
import "./App.css";

function App() {
  const [turnNumber, setTurnNumber] = useState(0);
  const [teams, setTeams] = useState([
    {
      members: [
        {
          name: "Sam",
        },
      ],
      token: window.tokens[0],
      startedCurrentRound: false,
      isActivePlayer: true,
      sequenceCount: 0,
    },
    {
      members: [
        {
          name: "Eva",
        },
      ],
      token: window.tokens[1],
      startedCurrentRound: false,
      isActivePlayer: false,
      sequenceCount: 0,
    },
    {
      members: [
        {
          name: "Niels",
        },
      ],
      token: window.tokens[2],
      startedCurrentRound: true,
      isActivePlayer: false,
      sequenceCount: 0,
    },
  ]);

  useEffect(() => {
    console.log("Teams: ", teams);
  }, [teams]);

  return (
    <div className="game-view">
      <Players teams={teams} setTeams={setTeams} turnNumber={turnNumber} />
      <Board
        teams={teams}
        setTeams={setTeams}
        turnNumber={turnNumber}
        setTurnNumber={setTurnNumber}
      />
      <Cards />
    </div>
  );
}

export default App;
