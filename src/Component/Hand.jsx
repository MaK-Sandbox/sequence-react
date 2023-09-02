import style from "./Hand.module.css";

export default function Hand({ cards, setPlayedCard }) {
  return (
    <div className={style["Hand"]}>
      {cards.map((card, index) => (
        <span
          className={style["Card"]}
          key={index}
          onClick={() => setPlayedCard(card)}
        >
          {card}
        </span>
      ))}
    </div>
  );
}
