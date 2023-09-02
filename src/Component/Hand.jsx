import style from "./Hand.module.css";

export default function Hand({ cards }) {
  return (
    <div className={style["Hand"]}>
      {cards.map((card, index) => (
        <span className={style["Card"]} key={index}>
          {card}
        </span>
      ))}
    </div>
  );
}
