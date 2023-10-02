import style from "./Lobby.module.css";

export default function Lobby({ teams }) {
  return (
    <div className={style["Lobby"]}>
      <h2>Current players in the room</h2>
      <ul>
        {teams.map((team) =>
          team?.players.map((player, index) => (
            <li key={index}>{player.username}</li>
          ))
        )}
      </ul>
    </div>
  );
}
