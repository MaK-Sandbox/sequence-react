import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import style from "./RootLayout.module.css";

export default function RootLayout() {
  const [isConnected, setIsConnected] = useState(false);
  const [socket] = useState(window.socket);
  const [wsMessage, setWsMessage] = useState("");

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onMessage(message) {
      console.log(message);
      setWsMessage(message);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("message", onMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message", onMessage);
    };
  }, [socket]);

  return (
    <div className={style["rootLayout"]}>
      <Outlet context={[wsMessage, socket]} />
    </div>
  );
}
