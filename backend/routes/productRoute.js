import express from "express";
import { createProduct } from "../controllers/Products/createProduct/createProduct.js";
import { getProducts } from "../controllers/Products/getProducts/getProducts.js";
import { getProductById } from "../controllers/Products/getProductById/getProductById.js";
import { readProductBySearchTerm } from "../controllers/Products/readProductBySearchTerm/readProductBySearchTerm.js";
import { updateProduct } from "../controllers/Products/updateProduct/updateProduct.js";
import { deleteProduct } from "../controllers/Products/deleteProduct/deleteProduct.js";

const router = express.Router();

// CREATE
router.post("/product", createProduct);

// READ
router.get("/products", getProducts);

// READ BY ID
router.get("/product/:id", getProductById);

//READ BY WORDS
router.get("/products/search", readProductBySearchTerm);

//UPDATE
router.put("/product/:id", updateProduct);

//DELETE
router.delete("/product/:id", deleteProduct);

export default router;
