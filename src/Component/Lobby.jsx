import style from "./Lobby.module.css";

export default function Lobby({ players }) {
  return (
    <div className={style["Lobby"]}>
      <h2>Current players in the room</h2>
      <ul>
        {players?.map((player, index) => (
          <li key={index}>Player: {player?.username}</li>
        ))}
      </ul>
    </div>
  );
}
