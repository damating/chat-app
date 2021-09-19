const app = require("express")();
const http = require("http");
const server = http.createServer(app);
const PORT = 8080;
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected", socket);
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
