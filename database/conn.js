import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export function connectDB() {
    mongoose.connect(process.env.ATLAS_URI);

    const db = mongoose.connection;
    db.on('error', (e) => console.log(e));
    db.on('open', () => console.log(`Connected to MongoDB!`));
    db.off('close', () => console.log(`Disconnected to MongoDB!`));
};