import { useOutletContext } from "react-router-dom";
import style from "./Hand.module.css";

export default function Hand() {
  const { card } = useOutletContext();

  return (
    <div className={style["Hand"]}>
      <span className={style["Card"]}>{card}</span>
      <span className={style["Card"]}>{card}</span>
      <span className={style["Card"]}>{card}</span>
      <span className={style["Card"]}>{card}</span>
      <span className={style["Card"]}>{card}</span>
      <span className={style["Card"]}>{card}</span>
      <span className={style["Card"]}>{card}</span>
    </div>
  );
}
