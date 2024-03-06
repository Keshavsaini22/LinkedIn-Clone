// const socketIO = require('socket.io')
// const io = socketIO(server)
// io.on('connection', (socket) => {
//     console.log('a user connected', socket.id);
//     socket.on('disconnect', () => {
//         console.log('A user disconnected',socket.id);
//       });
// });
// export { app, io, server };
const { Server } = require("socket.io")
const MessageModel = require('../models/MessageSchema')

module.exports = async (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  })

  io.on('connection', (socket) => {
    console.log("connection on: ", socket.id);

    socket.on("connecttt", () => {
      console.log("herer");
    })
    socket.on("join room", (roomId) => {
      socket.join(roomId);
      console.log("Room ....", roomId)
    })
    socket.on('newmessage', async ({ content, roomid, sender }) => {
      if (content && roomid && sender) {
        const message = await MessageModel.create({ roomid, content, sender });
        io.in(roomid).emit('message', message)
      }
    })
    // socket.emit("connection");
    socket.on("disconnect", () => {
      console.log("disconnect");
    })

  })

}