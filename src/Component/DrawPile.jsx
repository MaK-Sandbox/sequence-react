import { drawCard } from "../communications";
import style from "./DrawPile.module.css";

export default function DrawPile() {
  return (
    <div className={style.drawPile}>
      <img
        className={style.cell}
        src="https://i.pinimg.com/originals/7c/4d/01/7c4d015c0684e8da7f1da10fc29038c5.jpg"
        alt="backside of card"
        onClick={() => drawCard()}
        title="Draw a card"
      />
    </div>
  );
}
