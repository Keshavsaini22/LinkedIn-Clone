const socketIO = require('socket.io')
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const io = socketIO(server)


io.on('connection', (socket) => {
    console.log('a user connected', socket.id);


    socket.on('disconnect', () => {
        console.log('A user disconnected',socket.id);
      });
});

export { app, io, server };