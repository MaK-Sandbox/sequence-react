import style from "./Piles.module.css";
import DiscardPile from "./DiscardPile";
import DrawPile from "./DrawPile";

function Piles({ drawCard }) {
  return (
    <div className={style["Piles"]}>
      <DiscardPile />
      <DrawPile drawCard={drawCard} />
    </div>
  );
}

export default Piles;
