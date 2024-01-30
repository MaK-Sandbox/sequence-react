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
      {discardPile.length > 0 ? (
        <div className={style.cell} title="Discard pile">
          <div className={style.face}>
            {discardPile[discardPile.length - 1]}
          </div>
        </div>
      ) : (
        <div className={style.cellEmpty} title="Discard pile"></div>
      )}
    </div>
  );
}
