import { ObjectId } from "bson";
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    toUserID: {
        type: ObjectId,
        required: true
    },
    fromUserID: {
        type: ObjectId,
        required: true
    },
    rating: {
        type: Number,
        required: true,
    },
    review: {
        type: String,
        require: false,
        minLength: 5,
        maxLength: 250
    }
});

// reviewSchema.index({review: 1});

export default new mongoose.model("Review", reviewSchema);