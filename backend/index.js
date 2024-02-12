const express = require('express');
const cors = require('cors');
const connectDB=require('./config/db')
const authRoutes=require('./routes/authRoutes')
const userRoutes=require('./routes/userRoutes')


const app = express();

connectDB()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ['POST', 'GET'],
    credentials: true
}));

app.use('/', authRoutes);
app.use('/',userRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});