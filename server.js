const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (socket) => {
  console.log("A new client has been connected.");

  socket.on("message", (message) => {
    console.log(`Message received from clients: ${message}`);
    socket.send(`Response from the server: ${message}`);
  });

  socket.on("close", () => {
    console.log("Client connection terminated.");
  });
});

console.log("WebSocket Server Running on Port 8080.");
