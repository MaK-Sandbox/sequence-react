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

export function joinTable(tableId) {
  sendToServer("join", tableId);
}
