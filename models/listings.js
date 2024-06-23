import { ObjectId } from "bson";
import mongoose from "mongoose";

const userListing = new mongoose.Schema({
    userID: {
        type: ObjectId,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 30
    },
    price: {
        type: Number,
        required: true,
        minLength: 3
    },
    condition: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
 });

 export default new mongoose.model("Listing", userListing);