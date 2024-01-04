import style from "./DiscardPile.module.css";

export default function DiscardPile() {
  return (
    <div className={style.discardPile}>
      <div className={style.cell} title="Discard pile">
        <div className={style.face}>♠️Q</div>
      </div>
    </div>
  );
}
