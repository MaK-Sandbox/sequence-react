import { useEffect } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { joinTable } from "../communications";
import SetUsername from "../Component/SetUsername";
import ReadyButton from "../Component/ReadyButton";
import Lobby from "../Component/Lobby";
import "./JoinRoom.css";

export default function JoinTable() {
  const { tableId } = useParams();
  const { wsTable } = useOutletContext();

  useEffect(() => {
    joinTable(tableId);
    // console.log(wsTable);
  }, [tableId]);

  return (
    <div className="join-table">
      <SetUsername />
      <ReadyButton />
      <Link to="/">🡸 Go back to Main Menu</Link>
      Match ID: {tableId}
      <Lobby players={wsTable?.players} />
    </div>
  );
}
