import express from 'express'
import Cart from '../models/cart.js'
import Product from '../models/product.js'
import { checkProducts } from '../controllers/checkProducts.js'
import { updateStockAndCart } from '../controllers/updateStockAndCart.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { addProductInStock } from '../controllers/updateProductStock/addProductInStock.js'
import { substractProductInStock } from '../controllers/updateProductStock/subtractProductInSock.js'

const router = express.Router()

//add product and create cart
router.post('/cart/product', authMiddleware, async (req, res) => {

    const { products } = req.body
    const userId = req.user.id

    try{
        let cart = await Cart.findOne({userId})
        if (!cart){
            cart = new Cart({userId, products: []})
        }

        //get products from db as array , if product doesn't exist => value null
        const dbProducts = await Promise.all(
            products.map(p => Product.findById(p.productId))
        )

        //check if product exists and has enough quantity
        checkProducts(products, dbProducts)

        //update stock and cart
        await updateStockAndCart(products, dbProducts, cart)

        const savedCart = await cart.save()

        return res.status(200).json(savedCart)

    }catch(error){
        return res.status(error.status || 500).json({ message: error.message })
    }
})


//update product quantity
router.put('/cart/product/:productId', authMiddleware, async (req,res) => {
    const { productId} = req.params
    const userId = req.user.id
    const {quantity : newQuantity} = req.body

    try{
        const cart = await Cart.findOne({userId})//check if cart exists
        if (!cart) return res.status(404).json({message : 'cart not found'})

        const cartProduct = cart.products.find(p => p.productId.toString() === productId)//check if product exists in cart
        if (!cartProduct) return res.status(404).json({message : 'product not found in cart'})
        
        if (newQuantity < 0) {
          return res.status(400).json({ message: "Quantity must be >= 0" })
        }

        const oldQuantity = cartProduct.quantity
        const product = await Product.findById(productId)//get a product in Product stock
        const diff = newQuantity - oldQuantity

        if (diff >= 0){ //must take more from stock
            if (product.quantity < diff){
                return res.status(400).json({message: `Not enough quantity for product ${product.name}`})
            }

            await substractProductInStock(product, diff)

            cartProduct.quantity = newQuantity
            const updateCart = await cart.save()
            return res.status(200).json(updateCart)
        }else{
            await addProductInStock(product, -diff)

            cartProduct.quantity = newQuantity
            const updateCart = await cart.save()
            return res.status(200).json(updateCart)
        }
    }catch(error){
        return res.status(500).json({ message: error.message })
    }
})


//remove product from cart
router.delete('/cart/product/:productId',authMiddleware, async (req, res) => {
    const { productId} = req.params
    const userId = req.user.id

    try {
        const product = await Product.findById(productId)
        const cart = await Cart.findOne({userId})
        if (!cart) return res.status(404).json({message: 'Cart not found'})

        const cartProduct = cart.products.find(p => p.productId.toString() === productId)
        if (!cartProduct) return res.status(404).json({message: 'Product not found in cart'})

        await addProductInStock(product, cartProduct.quantity)

        cart.products = cart.products.filter(p => p.productId.toString() !== productId)//keep element if condition true
        await cart.save()
        return res.status(200).json({message: 'Product removed from cart'})
    }catch(error){
        return res.status(500).json({message: error.message})
    }
})

//see total price
router.get('/cart/totalPrice/user',authMiddleware, async (req, res) => {
    const userId = req.user.id

    try{
        const cart = await Cart.findOne({userId})
        if (!cart) return res.status(404).json({message: 'Cart not found'})
        
        const dbProducts = await Promise.all(
            cart.products.map(p => Product.findById(p.productId))
        )

        const total = dbProducts.reduce((totalPrice, product, index) => {
            if (product){
                totalPrice += product.price * cart.products[index].quantity
            }
            return totalPrice
        }, 0)

        return res.status(200).json({total})

    }catch(error){
        return res.status(500).json({message: error.message})
    }
})

export default router