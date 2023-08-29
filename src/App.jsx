import { useState } from "react";
import Players from "./Component/Players";
import Board from "./Component/Board";
import Cards from "./Component/Cards";
import "./App.css";

function App() {
  const [turnNumber, setTurnNumber] = useState(0);

  return (
    <div className="game-view">
      <Players turnNumber={turnNumber} />
      <Board turnNumber={turnNumber} setTurnNumber={setTurnNumber} />
      <Cards />
    </div>
  );
}

export default App;
