const { Server } = require("socket.io")


module.exports = async (server) => {
    const io = new Server(server, {
        cors: {
            origin: "http://localhost:3000",
        },
    })

    const user = {}
    io.on('connection', (socket) => {
        console.log("connection noti on: ", socket.id);
        user[socket.id] = socket.id
        // console.log('user: ', user);
        socket.on("disconnect", () => {
            console.log("disconnect");
        })
    })
}