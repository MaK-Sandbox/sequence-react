import { useEffect } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { joinTable } from "../communications";
import Lobby from "../Component/Lobby";
import "./JoinRoom.css";
import ReadyButton from "../Component/ReadyButton";

export default function JoinTable() {
  const { tableId } = useParams();
  const { wsTable } = useOutletContext();

  useEffect(() => {
    joinTable(tableId);
    // console.log(wsTable);
  }, [tableId]);

  return (
    <div className="join-table">
      <ReadyButton />
      <Link to="/">🡸 Go back to Main Menu</Link>
      Match ID: {tableId}
      <Lobby players={wsTable?.players} />
    </div>
  );
}
