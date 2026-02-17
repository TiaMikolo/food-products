import express from 'express';
import Room from '../models/room.js';
import User from '../models/user.js';

const router = express.Router()

//create public room
router.post('/room/public', async (req,res) => {
    try{
        const room = new Room({...req.body, type : 'public'})
        const saveRoom = await room.save()
        res.status(201).json(saveRoom)
    }catch(err){
        res.status(400).json({message : err.message})
    }
})

//create private room
router.post('/room/private', async (req, res) => {
    try{
        const members = req.body.members || []//if 0 member , we take array vide

        if (members.includes(req.body.creator)){
            return res.status(403).json({message : "You cannot create a private room with yourself as a member"})
        }
        const room = new Room({...req.body, type:'private', members : members})
        const saveRoom = await room.save()
        res.status(201).json(saveRoom)
    }catch(err){
        res.status(400).json({message : err.message})
    }
})

//invite user in public room
router.post('/room/public/:id/invite/:userId', async (req,res) => {
    try{
        const room = await Room.findById(req.params.id)
        if (!room){return res.status(404).json({message : "Room not found"})}

        if (room.type !== 'public') {
            return res.status(403).json({message : "You can only invite users to public rooms"})
        }

        const user = await User.findById(req.params.userId)
        if (!user) {return res.status(404).json({message : "User not found"})}

        if (room.members.map(id => id.toString()).includes(user._id.toString())) {
            return res.status(409).json({message : "User is already a member of the room"})
        }

        room.members.push(user._id)
        await room.save()
        res.status(200).json({message : "User invited to the public room"})
    }catch(err){
        res.status(400).json({message : err.message})
    }
})


//invite user in private room
router.post('/room/private/:id/invite/:userId' , async(req, res) => {
    try{
        const room = await Room.findById(req.params.id)
        if (!room){return res.status(404).json({message : "Room not found"})}

        const user = await User.findById(req.params.userId)
        if(!user) {return res.status(404).json({message : "User not found"})}

        if (room.members.map(id => id.toString()).includes(user._id.toString())) {
            return res.status(409).json({message : "User is already a member of the room"})
        }

        room.members.push(user._id)
        await room.save()
        res.status(200).json({message : "User invited to the private room"})
    }catch(err){
        res.status(400).json({message : err.message})
    }
})

export default router