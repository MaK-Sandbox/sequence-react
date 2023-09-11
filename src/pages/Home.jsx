import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <div className="container">
        <span className="set-name">
          <h2>Choose a name</h2>
          <input type="text" placeholder="name" />
          <button>SAVE</button>
        </span>
        <span className="create-table">
          <h2>Create new table</h2>
          <button>Create table</button>
        </span>
        <span className="join-table">
          <h2>Join table</h2>
          <input type="text" placeholder="table id" />
          <Link to="/join-table">JOIN</Link>
        </span>
      </div>
    </div>
  );
}
