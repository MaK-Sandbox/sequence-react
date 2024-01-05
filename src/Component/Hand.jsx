import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import style from "./Hand.module.css";

export default function Hand({ cards, setPlayedCard }) {
  const { card } = useOutletContext();

  useEffect(() => {
    console.log("card: ", card);
  }, [card]);

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
