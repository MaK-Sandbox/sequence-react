import { Link, useOutletContext, useParams } from "react-router-dom";
import "./JoinTable.css";
import { useEffect } from "react";
import Lobby from "../Component/Lobby";

export default function JoinTable() {
  const { tableId } = useParams();
  const { wsTable, socket } = useOutletContext();

  useEffect(() => {
    socket.emit("join", { matchId: tableId });
  }, []);

  return (
    <div className="join-table">
      <Link to="/">🡸 Go back to Main Menu</Link>
      Match ID: {wsTable.id}
      <Lobby players={wsTable?.players} />
    </div>
  );
}
