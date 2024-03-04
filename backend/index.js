const express = require('express');
const http = require('http');
const cors = require('cors');
const connectDB = require('./config/db')
const socketIO = require('socket.io')
const app = express();
const server = http.createServer(app);
require("dotenv").config();
const io = socketIO(server)
//db connect
connectDB()

//parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cors());

app.use('/uploads', express.static('uploads'))

io.on('connection', (socket) => {
    console.log('a user connected');


    // socket.on('disconnect', () => {
    //     console.log('A user disconnected');
    //   });
  });

//routes
app.use('/', require("./routes"))
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});


server.listen(process.env.SOCKET_PORT, () => {
    console.log(`Socker listening on port 8081!`);
});