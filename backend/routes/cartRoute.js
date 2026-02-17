import express from 'express'
import Cart from '../models/cart.js'
import Product from '../models/product.js'

const router = express.Router()

//Create cart and add product
router.post('/cart', async (req, res) => {

    const { userId, products} = req.body

    try {
        const existCart = await Cart.findOne({userId})  

        if (existCart){
            for (let p of products){
                const product = await Product.findById(p.productId) //get a product in Product stock

                if (!product) return res.status(404).json({message: `Product with id ${p.productId} not found`})
                
                if (product.quantity < p.quantity){
                    return res.status(400).json({message: `Not enough quantity for product ${product.name}`})
                }else{
                    product.quantity -= p.quantity
                    await product.save()

                    const cartProduct = existCart.products.find(item => item.productId.toString() === p.productId)//check if product exists in cart
                    if (cartProduct){
                        cartProduct.quantity += p.quantity
                    }else{
                        existCart.products.push({productId: p.productId, quantity: p.quantity})
                    }
                }
            } 
            const updateCart = await existCart.save()
            return res.status(200).json(updateCart)
        }else{
            const cart = new Cart({ userId, products })

            for (let p of products){
                const product = await Product.findById(p.productId)
                
                if (!product) return res.status(404).json({message: `Product with id ${p.productId} not found`})
                    
                if (product.quantity < p.quantity){
                    return res.status(400).json({message: `Not enough quantity for product ${product.name}`})
                }else{
                    product.quantity -= p.quantity
                    await product.save()
                }
            }
            const saveCart = await cart.save()
            return res.status(201).json(saveCart)
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


//update product quantity
router.put('/cart/:userId/product/:productId', async (req,res) => {
    const {userId, productId} = req.params
    const {quantity : newQuantity} = req.body

    try{
        const cart = await Cart.findOne({userId})//check if cart exists
        if (!cart) return res.status(404).json({message : 'cart not found'})

        const cartProduct = cart.products.find(p => p.productId.toString() === productId)//check if product exists in cart
        if (!cartProduct) return res.status(404).json({message : 'product not found in cart'})

        const oldQuantity = cartProduct.quantity
        const product = await Product.findById(productId)//get a product in Product stock
        const diff = newQuantity - oldQuantity

        if (diff >= 0){ //must take more from stock
            if (product.quantity >= diff){
                product.quantity -= diff
                await product.save()
                cartProduct.quantity = newQuantity
                const updateCart = await cart.save()
                return res.status(200).json(updateCart)
            }else{
                return res.status(400).json({message: `Not enough quantity for product ${product.name}`})
            }
        }else{ 
            product.quantity += -diff
            await product.save()
            cartProduct.quantity = newQuantity
            const updateCart = await cart.save()
            return res.status(200).json(updateCart)
        }
    }catch(error){
        return res.status(500).json({ message: error.message })
    }
})


//remove product
router.delete('/cart/:userId/product/:productId', async (req, res) => {
    const {userId, productId} = req.params

    try {
        const product = await Product.findById(productId)
        const cart = await Cart.findOne({userId})
        if (!cart) return res.status(404).json({message: 'Cart not found'})

        const cartProduct = cart.products.find(p => p.productId.toString() === productId)
        if (!cartProduct) return res.status(404).json({message: 'Product not found in cart'})

        product.quantity += cartProduct.quantity
        await product.save()
        cart.products = cart.products.filter(p => p.productId.toString() !== productId)//keep element if condition true
        await cart.save()
        return res.status(200).json({message: 'Product removed from cart'})
    }catch(error){
        return res.status(500).json({message: error.message})
    }
})

//see total price
router.get('/cart/:userId/total', async (req, res) => {
    const {userId} = req.params

    try{
        const cart = await Cart.findOne({userId})
        if (!cart) return res.status(404).json({message: 'Cart not found'})
        
        let total = 0
        for (const p of cart.products){
            const product = await Product.findById(p.productId)
            if (product) {
                total += product.price * p.quantity
            }
        }
        return res.status(200).json({total})

    }catch(error){
        return res.status(500).json({message: error.message})
    }
})

export default router