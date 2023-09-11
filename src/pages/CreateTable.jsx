import { Link } from "react-router-dom";
import "./CreateTable.css";

export default function CreateTable() {
  return (
    <div className="create-table">
      <div className="container">
        <Link to="/">🡸 Go back to Main Menu</Link>
        Create Table
      </div>
    </div>
  );
}
