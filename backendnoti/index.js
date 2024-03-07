const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const http = require('http');
require("dotenv").config();
//db connect
connectDB()

const app = express();
const server = http.createServer(app);
//parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cors());

require('./socket/socket')(server)

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});