import { useOutletContext } from "react-router-dom";
import style from "./DiscardPile.module.css";
import { useEffect } from "react";

export default function DiscardPile() {
  const { discardPile } = useOutletContext();

  useEffect(() => {
    if (Array.isArray(discardPile)) {
      console.log("Is Array!");
    }
  }, [discardPile]);

  return (
    <div className={style.discardPile}>
      <div className={style.cell} title="Discard pile">
        {discardPile.length > 0 ? (
          <div className={style.face}>
            {discardPile[discardPile.length - 1]}
          </div>
        ) : null}
      </div>
    </div>
  );
}
