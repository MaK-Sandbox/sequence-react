import "./Cards.css";
import DiscardPile from "./DiscardPile";
import DrawPile from "./DrawPile";

function Cards({ drawCard }) {
  return (
    <div>
      <DiscardPile />
      <DrawPile drawCard={drawCard} />
    </div>
  );
}

export default Cards;
