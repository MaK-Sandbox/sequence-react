export function sendToServer(event, data) {
  window.socket.emit(event, data);
}

export function updateUsername(username) {
  console.log("Send player name to backend...");
  sendToServer("username", username);
}

export function updateTable(table) {
  console.log("Sending new table state to backend...");
  sendToServer("table", table);
}

export function joinTable(tableId) {
  sendToServer("join", tableId);
}
