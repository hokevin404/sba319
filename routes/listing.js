import express from "express";
import Listing from '../models/listings.js';

const router = express.Router();

router
    .route('/')
    .get(async (req, res) => {
        const all = await Listing.find({});
        res.send(all);    
    });





export default router;