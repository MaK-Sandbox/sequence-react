import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import style from "./RootLayout.module.css";

export default function RootLayout() {
  const [isConnected, setIsConnected] = useState(false);
  const [socket] = useState(window.socket);
  const [wsMessage, setWsMessage] = useState("");
  const [username, setUsername] = useState("");
  const [wsReady, setWsReady] = useState(false);
  const [wsTable, setWsTable] = useState({});
  const [hand, setHand] = useState([]);
  const [card, setCard] = useState("");

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

    function onName(name) {
      console.log(name);
      setUsername(name);
    }

    function onReady(ready) {
      console.log(`Received from the backend: ${ready}`);
      setWsReady(ready);
    }

    function onCreateMatch(match) {
      console.log(match);
      setWsTable(match);
    }

    function onStartMatch(match) {
      console.log(match);
      setWsTable(match);
    }

    function onTable(table) {
      console.log(table);
      setWsTable(table);
    }

    function onDealHand(hand) {
      console.log(hand);
      setHand(hand);
    }

    function onUpdateHand(hand) {
      console.log(hand);
      setHand(hand);
    }

    function onDrawCard(card) {
      console.log(card);
      setCard(card);
    }

    function onError(err) {
      console.log(err);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("message", onMessage);
    socket.on("username", onName);
    socket.on("ready", onReady);
    socket.on("createMatch", onCreateMatch);
    socket.on("startMatch", onStartMatch);
    socket.on("table", onTable);
    socket.on("cardsDealt", onDealHand);
    socket.on("updateHand", onUpdateHand);
    socket.on("drawCard", onDrawCard);
    socket.on("error", onError);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message", onMessage);
      socket.off("username", onName);
      socket.off("ready", onReady);
      socket.off("createMatch", onCreateMatch);
      socket.off("startMatch", onStartMatch);
      socket.off("table", onTable);
      socket.off("cardsDealt", onDealHand);
      socket.off("updateHand", onUpdateHand);
      socket.off("drawCard", onDrawCard);
      socket.off("error", onError);
    };
  }, [socket]);

  return (
    <div className={style["rootLayout"]}>
      {isConnected ? (
        <Outlet
          context={{
            wsMessage,
            username,
            wsReady,
            wsTable,
            setWsTable,
            hand,
            card,
            socket,
            isConnected,
          }}
        />
      ) : (
        "Connecting to game server..."
      )}
    </div>
  );
}
