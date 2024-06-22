import mongoose from "mongoose";

const userReview = new mongoose.Schema [{
    toUserID: {
        type: Number,
        required: true
    },
    fromUserID: {
        type: Number,
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
}];

export default new mongoose.model("Reviews", userReview);