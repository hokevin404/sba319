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

router
    .route('/:id')
    .get(async (req, res) => {
        // Search database for a user by given ID
        const query = User.findById(req.params.id);
        // Execute the query
        let foundUser = await query.exec();
        // console.log(foundUser);
        res.send(foundUser).status(200);
    })
    .patch(async (req, res) => {
        // console.log(req.params)
        // console.log(req.body)
        // Find user by ID, then apply updates from req.body, and then return with changes
        let user = await User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        res.send(user);
    })
    .delete(async (req, res) => {
        let user = await User.deleteOne({_id: req.params.id});
        if(user.deletedCount)
            res.send(`User with id: ${req.params.id} was deleted`);
        else
            res.send(`Deletion failed`)
    })

export default router;