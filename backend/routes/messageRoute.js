import express from 'express';
import Message from '../models/message.js';
import Room from '../models/room.js';
import User from '../models/user.js';

const router = express.Router();

//create message
router.post('/message', async (req,res) => {
    try{
        const recipient = await User.findById(req.body.recipient)
        if (!recipient) {return res.status(404).json({message : "Recipient not found"})}

        const sender = await User.findById(req.body.sender)
        if (!sender) {return res.status(404).json({message : "Sender not found"})}

        const message = new Message({...req.body, sender: sender._id, recipient: recipient._id})
        await message.save()
        res.status(201).json(message)
    }catch(err){
        res.status(400).json({message : err.message})
    }
})

export default router