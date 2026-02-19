import Cart from "../../../models/cart.js";
import Product from "../../../models/product.js";
import { addProductInStock } from "../../../utils/updateProductStock/addProductInStock.js";

export const removeProduct = async (req, res) => {
  const { productId } = req.params;
  const userId = req.user.id;

  try {
    const product = await Product.findById(productId);
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const cartProduct = cart.products.find(
      (p) => p.productId.toString() === productId,
    );
    if (!cartProduct)
      return res.status(404).json({ message: "Product not found in cart" });

    await addProductInStock(product, cartProduct.quantity);

    cart.products = cart.products.filter(
      (p) => p.productId.toString() !== productId,
    ); //keep element if condition true
    await cart.save();
    return res.status(200).json({ message: "Product removed from cart" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
