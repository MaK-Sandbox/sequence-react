import style from "./DrawPile.module.css";

export default function DrawPile() {
  return (
    <div className={style.drawPile}>
      <div className={style.cell}>
        <div className={style.face}>♠️Q</div>
      </div>
    </div>
  );
}
