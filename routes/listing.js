import express from "express";
import Listing from '../models/listings.js';

const router = express.Router();

router
    .route('/')
    .get(async (req, res) => {
        const all = await Listing.find({});
        res.send(all);    
    });

    router
    .route('/:id')
    .get(async (req, res) => {
        // console.log(req.params.id);
        try {
            const foundListing = await Listing.find({_id: req.params.id});
            res.send(foundListing);
        } catch (error) {
            console.error(`ERROR: Listings was not be found`);
            res.end();
        }
    })


export default router;