import style from "./Hand.module.css";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function Hand() {
  const { hand } = useOutletContext();

  useEffect(() => {
    hand.length > 0 ? console.log("dealt hand: ", hand) : null;
  }, [hand]);

  return (
    <div className={style["Hand"]}>
      {hand.length > 0
        ? hand.map((hand, i) => (
            <span key={i} className={style["Card"]}>
              {hand}
            </span>
          ))
        : null}
    </div>
  );
}
