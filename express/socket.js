import app from './app.js';
import http from 'http';
import {Server} from 'socket.io';
import env from './configs/env.js';

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
})

io.on('connection', (socket) => {
console.log('User connected:', socket.id);

 socket.on("chat-message", (msg) => {
    console.log("Message:", msg);

    io.emit("chat-message", msg);
  });

 socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

})

server.listen(env.WEBSOCKET_PORT, () => {
  console.log(`WebSocket server running on port ${env.WEBSOCKET_PORT}`);
});