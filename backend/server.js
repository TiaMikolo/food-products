import express from 'express'
import mongoose from 'mongoose'
import productRoute from './routes/productRoute.js'
import userRoute from './routes/userRoute.js'
import cartRoute from './routes/cartRoute.js'
import messageRoute from './routes/messageRoute.js'
import roomRoute from './routes/roomRoute.js'

const app = express()
const port = 3000

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/food-products')
.then(() => console.log('Connectes to Mongodb'))
.catch(err => console.log('Error connecting to Mongodb', err))

app.use('/',productRoute, userRoute, cartRoute, messageRoute, roomRoute)//use all routes

app.get('/', (req,res) => {
    res.send('Welcome to my API')//default route
})

app.use((req,res) => {
    res.status(404).json({message : 'Route not found'})//default route
})

app.use((err, req,res,next) => {
    console.error(err.stack)
    res.status(500).json({message : 'Internal Server Error'})//global error
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})
