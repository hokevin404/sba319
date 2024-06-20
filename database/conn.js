import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export function connectDB() {
    mongoose.connect(process.env.ATLAS_URI);

    const conn = mongoose.connection;
    conn.on('error', (e) => console.log(e));
    conn.on('open', () => console.log(`Connected to MongoDB!`));
    conn.off('close', () => console.log(`Disconnected to MongoDB!`));
};