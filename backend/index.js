const express = require('express');
const cors = require('cors');
const connectDB=require('./config/db')
const authRoutes=require('./routes/authRoutes')
const userRoutes=require('./routes/userRoutes')
const postRoutes=require('./routes/postRoutes')

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
app.use('/', authRoutes);
app.use('/',userRoutes);
app.use('/',postRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});