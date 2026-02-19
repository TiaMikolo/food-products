import Cart from "../../../models/cart.js";
import Product from "../../../models/product.js";
import { checkProducts } from "../../../utils/checkProducts.js";
import { updateStockAndCart } from "../../../utils/updateStockAndCart.js";

export const addProductInCart = async (req, res) => {
  const { products } = req.body;
  const userId = req.user.id;

  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, products: [] });
    }

    //get products from db as array , if product doesn't exist => value null
    const dbProducts = await Promise.all(
      products.map((p) => Product.findById(p.productId)),
    );

    //check if product exists and has enough quantity
    checkProducts(products, dbProducts);

    //update stock and cart
    await updateStockAndCart(products, dbProducts, cart);

    const savedCart = await cart.save();

    return res.status(200).json(savedCart);
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};
