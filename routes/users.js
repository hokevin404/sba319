import express from 'express';
import User from '../models/users.js'

const router = express.Router();

router
    .route('/')
    // root POST route to create new user
    .post(async (req, res) => {
        // console.log(req.body);

        const newDocument = new User(req.body)
        // console.log(newDocument);

        try {
            await newDocument.save();
            res.send(newDocument).status(204);
        } catch (error) {
            console.error(error);
            res.end();
        }
    });

export default router;