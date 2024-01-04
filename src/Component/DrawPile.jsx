import { drawCard } from "../communications";
import style from "./DrawPile.module.css";

export default function DrawPile() {
  return (
    <div className={style.drawPile}>
      <div className={style.cell} onClick={() => drawCard()}>
        <div className={style.face}>♠️Q</div>
      </div>
    </div>
  );
}
