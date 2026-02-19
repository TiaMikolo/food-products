import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { addProductInCart } from "../controllers/Carts/addProductInCart/addProductInCart.js";
import { updateProductQuantity } from "../controllers/Carts/updateProductQuantity/updateProductQuantity.js";
import { removeProduct } from "../controllers/Carts/removeProduct/removeProduct.js";
import { totalPriceInCart } from "../controllers/Carts/totalPriceInCart/totalPriceInCart.js";

const router = express.Router();

//add product and create cart
router.post("/cart/product", authMiddleware, addProductInCart);

//update product quantity
router.put("/cart/product/:productId", authMiddleware, updateProductQuantity);

//remove product from cart
router.delete("/cart/product/:productId", authMiddleware, removeProduct);

//see total price
router.get("/cart/totalPrice/user", authMiddleware, totalPriceInCart);

export default router;
