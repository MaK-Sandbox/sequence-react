import style from "./Piles.module.css";
import DiscardPile from "./DiscardPile";
import DrawPile from "./DrawPile";

export default function Piles({ drawCard }) {
  return (
    <div className={style["Piles"]}>
      <DiscardPile />
      <DrawPile drawCard={drawCard} />
    </div>
  );
}
