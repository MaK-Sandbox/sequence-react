import style from "./Lobby.module.css";

export default function Lobby({ teams }) {
  return (
    <div className={style["Lobby"]}>
      <h2>Connected players</h2>
      <div className={style["grid-container"]}>
        <div className={style["grid-header"]}>Team</div>
        <div className={style["grid-header"]}>Username</div>
        <div className={style["grid-header"]}>Ready</div>
        {teams.map((team) =>
          team?.players.map((player, index) => (
           <>
            <div key={index}>{team.token}</div>
            <div key={index}>{player.username}</div>
            <div key={index}>{`${player.ready}`}</div>
            </>
          ))
        )}
      </div>
    </div>
  );
}
