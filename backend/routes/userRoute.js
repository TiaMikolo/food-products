import express from 'express'
import User from '../models/user.js'
import { userValidationSchema } from '../validation/userValidation.js'

const router = express.Router()

//CREATE
router.post('/user',async (req, res) => {
    const { error, value } = userValidationSchema.validate(req.body)

    if (error) {
    return res.status(400).json({
      message: error.details[0].message
    })
  }

    try{
        const user = new User(value)
        const saveUser = await user.save()
        res.status(201).json(saveUser)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

//READ
router.get('/users',async (req, res) => {
    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch (err){
        res.status(500).json({message: err.message})
    }
})

//UPDATE
router.put('/user/:id', async (req, res) => {
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!updateUser) return res.status(404).json({message: 'User not found'})
        res.status(200).json(updateUser)
    }catch (err){
        res.status(500).json({message: err.message})
    }
})


//DELETE
router.delete('/user/:id', async (req, res) => {
    try{
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        if (!deleteUser) return res.status(404).json({message: 'User not found'})
        res.status(200).json({message: 'User deleted successfully'})
    }catch (err){
        res.status(500).json({message: err.message})
    }
})

export default router