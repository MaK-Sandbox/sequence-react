import { useState, useEffect } from "react";
import style from "./Scores.module.css";

export default function Scores({ teams }) {
  const [teamCount, setTeamCount] = useState(2);

  useEffect(() => {
    setTeamCount(teams.length);
  }, [teams]);

  return (
    <div className={style["Scores"]}>
      <h2>Score</h2>
      <div
        className={teamCount > 2 ? style["Three-teams"] : style["Two-teams"]}
      >
        {Object.keys(teams).map((key, index) => {
          return (
            <div className={style["Score"]} key={index}>
              {/* <p>{key}</p> */}
              <p>{teams[key].sequences.length}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
