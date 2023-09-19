import { useEffect } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import "./JoinTable.css";

import { joinTable } from "../communications";
import Lobby from "../Component/Lobby";

export default function JoinTable() {
  const { tableId } = useParams();
  const { wsTable } = useOutletContext();

  useEffect(() => {
    joinTable(tableId);
  }, [tableId]);

  return (
    <div className="join-table">
      <Link to="/">🡸 Go back to Main Menu</Link>
      Match ID: {wsTable.id}
      <Lobby players={wsTable?.players} />
    </div>
  );
}
