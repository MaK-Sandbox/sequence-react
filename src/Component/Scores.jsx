import style from "./Scores.module.css";

export default function Scores({ teams }) {
  return (
    <div className={style["Scores"]}>
      <h2>Score</h2>
      <div className={style["Current-scores"]}>
        {Object.keys(teams).map((key, index) => {
          return (
            <div className={style["Score"]} key={index}>
              <p>{key}</p>
              <p>{teams[key].sequenceCount}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
