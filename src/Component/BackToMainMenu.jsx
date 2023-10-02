import { Link } from "react-router-dom";
import style from "./BackToMainMenu.module.css";

export default function BackToMainMenu() {
  return (
    <Link className={style["back-to-main-menu"]} to="/">
      🡸 Go back to Main Menu
    </Link>
  );
}
