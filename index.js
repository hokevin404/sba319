// Imports 
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Initializations
const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();
mongoose.connect(process.env.ATLAS_URI);
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Welcome to The World`);
})

// Testing for server activity
app.listen(PORT, (req, res) => {
    console.log(`Server listening on port: ${PORT}`);
});