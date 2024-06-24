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
        
        // console.log(userWrittenReviews);
        try {
            const userWrittenReviews = await Review.find({fromUserID: req.params.userid})
            res.send(userWrittenReviews);
        } catch (error) {
            console.error(`ERROR: Listings was not be found`);
            res.end();
        }
    })
    // .patch(async (req, res) => {
    //     try {
    //         const patchListing = await Listing.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
    //         res.send(patchListing);
    //     } catch (error) {
    //         console.error(`ERROR: Listings was not be found`);
    //         res.end();
    //     }
    // })
    // .delete(async (req, res) => {
    //     let userListing = await Listing.deleteOne({_id: req.params.id});
    //     if(userListing.deletedCount)
    //         res.send(`Listing with id: ${req.params.id} was deleted`);
    //     else
    //         res.send(`Deletion failed`)
    // })
export default router;