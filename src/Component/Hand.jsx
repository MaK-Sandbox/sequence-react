import style from "./Hand.module.css";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function Hand({ setSelected }) {
  const { hand, deadCards } = useOutletContext();

  function classNameDeadCard(card) {
    if (deadCards.includes(card)) return style.DeadCard;
    return "";
  }

  useEffect(() => {
    hand.length > 0 ? console.log("hand received from backend: ", hand) : null;
  }, [hand]);

  useEffect(() => {
    deadCards.length > 0 ? console.log("deadCards: ", deadCards) : null;
  }, [deadCards]);

  return (
    <div className={style["Hand"]}>
      {hand.length > 0
        ? hand.map((card, i) => (
            <span
              key={i}
              className={`${style.Card} ${classNameDeadCard(card)}`}
              onClick={(event) => {
                setSelected(event.target.innerText);
              }}
            >
              <div>{card}</div>
              <div>{deadCards.includes(card) ? "☠️" : ""}</div>
            </span>
          ))
        : null}
    </div>
  );
}
