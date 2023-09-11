import style from "./Lobby.module.css";

export default function Lobby({ players }) {
  return (
    <div className={style.Lobby}>
      {players?.map((player, index) => (
        <div key={index}>Player: {player?.name}</div>
      ))}
    </div>
  );
}
