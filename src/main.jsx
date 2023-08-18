import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

window.boardLayout = [
  ["X", "♠️2", "♠️3", "♠️4", "♠️5", "♠️6", "♠️7", "♠️8", "♠️9", "X"],
  ["♣️6", "♣️5", "♣️4", "♣️3", "♣️2", "♥️A", "♥️K", "♥️Q", "♥️10", "♠️10"],
  ["♣️7", "♠️A", "♦️2", "♦️3", "♦️4", "♦️5", "♦️6", "♦️7", "♥️9", "♠️Q"],
  ["♣️8", "♠️K", "♣️6", "♣️5", "♣️4", "♣️3", "♣️2", "♦️8", "♥️8", "♠️K"],
  ["♣️9", "♠️Q", "♣️7", "♥️6", "♥️5", "♥️4", "♥️A", "♦️9", "♥️7", "♠️A"],
  ["♣️10", "♠️10", "♣️8", "♥️7", "♥️2", "♥️3", "♥️K", "♦️10", "♥️6", "♦️2"],
  ["♣️Q", "♠️9", "♣️9", "♥️8", "♥️9", "♥️10", "♥️Q", "♦️Q", "♥️5", "♦️3"],
  ["♣️K", "♠️8", "♣️10", "♣️Q", "♣️K", "♣️A", "♦️A", "♦️K", "♥️4", "♦️4"],
  ["♣️A", "♠️7", "♠️6", "♠️5", "♠️4", "♠️3", "♠️2", "♥️2", "♥️3", "♦️5"],
  ["X", "♦️A", "♦️K", "♦️Q", "♦️10", "♦️9", "♦️8", "♦️7", "♦️6", "X"],
];

window.board = createBoard(window.boardLayout);

window.players = ["🔵", "🔴", "🟢"];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function createBoard(layout) {
  const board = layout.map((row) =>
    row.map((cell) => ({
      face: cell,
      token: null,
    }))
  );

  return board;
}
