import app from './app.js';
import http from 'http';
import {Server} from 'socket.io';

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
})

io.on('connection', (socket) => {
console.log('User connected:',socket.id)

 socket.on("chat-message", (msg) => {
    console.log("Message:", msg);

    io.emit("chat-message", msg);
  });

socket.on("disconnect", () => {
  console.log("User disconnected:", socket.id);
  });

})

server.listen(3000, () => {
  console.log("Server running on port 3000");
});