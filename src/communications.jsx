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

export function dealCards() {
  console.log("Send request to deal cards to the backend...");
  sendToServer("dealCards");
}

export function drawCard() {
  console.log("Draw card from the backend...");
  sendToServer("drawCard");
}
