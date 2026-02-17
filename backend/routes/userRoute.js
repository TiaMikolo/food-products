import express from 'express'
import User from '../models/user.js'
import { userValidationSchema } from '../validation/userValidation.js'
import bcrypt from 'bcryptjs'

const router = express.Router()

//CREATE
router.post('/user',async (req, res) => {
    const { error, value } = userValidationSchema.validate(req.body) //checks if the data sent by the user complies with the schema rules
    // const {error , value} : destruction objet
    // const result = userValidationSchema.validate(req.body)
    // const result.error , result.value 

    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        })
    } 

    try{
        const hashedPassword = await bcrypt.hash(value.password, 10)
        const user = new User({...value, password: hashedPassword})
        const saveUser = await user.save()
        res.status(201).json({user: saveUser})
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

//LOGIN
router.post('/user/login',async (req, res) => {
    const {email , password } = req.body

    try{
        const user = await User.findOne({ email })//check email
        if (!user) return res.status(404).json({message: 'User not found'})

        const isMatch = await bcrypt.compare(password, user.password)//check password
        if (!isMatch) return res.status(400).json({message: 'Invalid credentials'})

        const token = jwt.sign({ id: user._id, role: user.role }, 'your_secret_key', { expiresIn: '1h' });
        res.status(200).json({message: 'Login successful'})//ok
    }catch(err){
        res.status(500).json({message: err.message})
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