import "./Piles.css";
import DiscardPile from "./DiscardPile";
import DrawPile from "./DrawPile";

function Piles({ drawCard }) {
  return (
    <div className="Piles">
      <DiscardPile />
      <DrawPile drawCard={drawCard} />
    </div>
  );
}

export default Piles;
