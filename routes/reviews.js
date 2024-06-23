import express from 'express';
import Review from '../models/reviews.js';

const router = express.Router();

router
    .route('/')
    .get(async (req, res) => {
        const all = await Review.find({});
        res.send(all);
    })

export default router;