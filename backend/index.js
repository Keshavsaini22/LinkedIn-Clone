const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { app, server } = require('./socket/socket');
require("dotenv").config();
//db connect
connectDB()

//parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cors());

app.use('/uploads', express.static('uploads'))



//routes
app.use('/', require("./routes"))
server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});


// server.listen(process.env.SOCKET_PORT, () => {
//     console.log(`Socker listening on port 8081!`);
// });