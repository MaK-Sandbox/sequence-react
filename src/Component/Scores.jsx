import { useEffect } from "react";
import style from "./Scores.module.css";

export default function Scores({ teams }) {
  useEffect(() => {
    for (const key in teams) {
      if (Object.hasOwnProperty.call(teams, key)) {
        const element = teams[key];

        console.log("key: ", key);
        console.log("element: ", element.sequenceCount);
      }
    }
  }, [teams]);

  return <div className={style["Scores"]}>Placeholder</div>;
}
