const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const commentRoutes = require('./routes/commentRoutes')
const reactionRoutes = require('./routes/reactionRoutes')

const app = express();

connectDB()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ['POST', 'GET'],
    credentials: true
}));
app.use('/uploads', express.static('uploads'))
// app.use('/', authRoutes);
// app.use('/',userRoutes);
// app.use('/',postRoutes);
// app.use('/',commentRoutes);
// app.use('/',reactionRoutes);

app.use('/', require("./routes"))


const PORT = 8080;     //// process.env.PORT ||
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});