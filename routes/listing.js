import express from "express";
import Listing from '../models/listings.js';

const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        res.send(Listing)
    })

export default router;    