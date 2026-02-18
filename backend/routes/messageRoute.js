import express from 'express';
import Message from '../models/message.js';
import User from '../models/user.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

//create message
router.post('/message', authMiddleware, async (req,res) => {
    try{
        const recipient = await User.findById(req.body.recipient)
        if (!recipient) {return res.status(404).json({message : "Recipient not found"})}

        const senderId = req.user.id

        const message = new Message({...req.body, sender: senderId, recipient: recipient._id})
        await message.save()
        res.status(201).json(message)
    }catch(err){
        res.status(400).json({message : err.message})
    }
})

export default router