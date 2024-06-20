// Imports 
import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './database/conn.js';
import userRoute from './routes/users.js'

// Initializations
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use('/users', userRoute);

app.get('/', (req, res) => {
    res.send(`Welcome to The World`);
})

// Testing for server activity
app.listen(PORT, (req, res) => {
    console.log(`Server listening on port: ${PORT}`);
});