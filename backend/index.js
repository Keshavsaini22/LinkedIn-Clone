const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db')
require("dotenv").config();
const app = express();

//db connect
connectDB()

//parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ['POST', 'GET'],
    credentials: true
}));
app.use('/uploads', express.static('uploads'))

//routes
app.use('/', require("./routes"))
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});