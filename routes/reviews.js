import express from 'express';
import Review from '../models/reviews.js';

const router = express.Router();

router
    .route('/')
    .get(async (req, res) => {
        const all = await Review.find({});
        res.send(all);
    })
    .post(async (req, res) => {
        let newDocument = {};
        if(req.body.toUserID && req.body.fromUserID && req.body.rating) {
            newDocument = new Review(req.body);

        }

        try {
            await newDocument.save();
            res.send(newDocument);
        } catch (error) {
            console.error(error);
            res.end();
        }
    });

router
    .route('/:userid')
    .get(async (req, res) => {
        // console.log(req.params.userid);

        try {
            const userReviews = await Review.find({toUserID: req.params.userid});
            res.json(userReviews);
        } catch (error) {
            console.error(`ERROR: User reviews were not found`);
            res.end();
        }
    })
export default router;