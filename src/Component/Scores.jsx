import style from "./Scores.module.css";

export default function Scores({ teams }) {
  return (
    <div className={style["Scores"]}>
      <h2>Score</h2>
      <span className={style["test"]}>
        <div className={style["Scores-container"]}>
          {teams && Array.isArray(teams)
            ? teams.map((team, i) => {
                if (typeof team === "object" && team !== null) {
                  return (
                    <div key={i * 10} className={style["Score"]}>
                      <div key={i * 10 + 1}>{team.token}</div>
                      <div key={i * 10 + 2}>{team.sequences.length}</div>
                    </div>
                  );
                }
              })
            : null}
        </div>
      </span>
    </div>
  );
}
