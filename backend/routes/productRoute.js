import express from 'express'
import Product from '../models/product.js'

const router = express.Router() 

// CREATE
router.post('/product', async (req, res) => {
    try{
        const product = new Product(req.body)   
        const saveProduct = await product.save()
        res.status(201).json(saveProduct)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

// READ
router.get('/products', async (req, res) => {
    try{
        const products = await Product.find()
        res.status(200).json(products)
    }catch(err){
        res.status(500).json({message : err.message})
    }
})

// READ BY ID
router.get('/product/:id', async (req, res) => {
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    }catch(err){
        res.status(500).json({message : err.message})
    }
})

//READ BY WORDS
router.get('/products/search',async (req, res) =>{
    try{
        const text = req.query.text
        const products = await Product.find({
           name : { $regex : text, $options : 'i'}
        })
        res.status(200).json(products)
    }catch(err){
        res.status(500).json({message : err.message})
    }
})

//UPDATE
router.put('/product/:id',async (req, res) => {
    try{
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body,{new: true})
        if (!updateProduct) return res.status(404).json({message : 'product not found'})
        res.status(200).json(updateProduct)
    }catch (err){
        res.status(500).json({message : err.message})
    }
})

//DELETE
router.delete('/product/:id', async (req,res) => {
    try{
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        if (!deleteProduct) return res.status(404).json({message : 'product not found'})
        res.status(200).json({message : 'product deleted successfully'})
    }catch (err){
        res.status(500).json({message : err.message})
    }
})  

export default router