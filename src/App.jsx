import Players from "./Component/Players";
import Board from "./Component/Board";
import Cards from "./Component/Cards";
import "./App.css";

function App() {
  return (
    <div className="game-view">
      <Players />
      <Board />
      <Cards />
    </div>
  );
}

export default App;
