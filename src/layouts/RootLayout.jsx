import { Outlet } from "react-router-dom";
import style from "./RootLayout.module.css";

export default function RootLayout() {
  return (
    <div className={style["rootLayout"]}>
      <Outlet />
    </div>
  );
}
