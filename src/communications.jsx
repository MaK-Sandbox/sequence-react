export function sendToServer(event, data) {
  window.socket.emit(event, data);
}

export function updateUsername(username) {
  console.log("Send player name to backend...");
  sendToServer("username", username);
}

export function createMatch() {
  console.log("Send request to create a new match to backend...");
  sendToServer("createMatch");
}

export function updateTable(table) {
  console.log("Sending new table state to backend...");
  sendToServer("table", table);
}

export function updateReady(ready) {
  console.log("Sending player ready state to backend...");
  sendToServer("ready", ready);
}

export function joinTable(tableId) {
  sendToServer("join", tableId);
}

export function startMatch() {
  console.log("Sending start game state to backend...");
  sendToServer("startMatch");
}

export function playSelectedCard(card, row, cell) {
  console.log("Selected card sent to the backend...", card);
  console.log("Row number sent to the backend...", row);
  console.log("Cell number sent to the backend...", cell);
  sendToServer("playCard", {
    selectedCard: card,
    rowNumber: row,
    cellNumber: cell,
  });
}

export function drawCard() {
  console.log("Draw card from the backend...");
  sendToServer("drawCard");
}

export function endTurn() {
  console.log("Ask backend to end playsers turn...");
  sendToServer("endTurn");
}

export function replaceDeadCard(card) {
  console.log(
    "Send request to backend to replace one dead card on players hand..."
  );
  sendToServer("replaceDeadCard", card);
}
