import Cart from "../../../models/cart.js";
import Product from "../../../models/product.js";
import { addProductInStock } from "../../../utils/updateProductStock/addProductInStock.js";
import { substractProductInStock } from "../../../utils/updateProductStock/subtractProductInSock.js";

export const updateProductQuantity = async (req, res) => {
  const { productId } = req.params;
  const userId = req.user.id;
  const { quantity: newQuantity } = req.body;

  try {
    const cart = await Cart.findOne({ userId }); //check if cart exists
    if (!cart) return res.status(404).json({ message: "cart not found" });

    const cartProduct = cart.products.find(
      (p) => p.productId.toString() === productId,
    ); //check if product exists in cart
    if (!cartProduct)
      return res.status(404).json({ message: "product not found in cart" });

    if (newQuantity < 0) {
      return res.status(400).json({ message: "Quantity must be >= 0" });
    }

    const oldQuantity = cartProduct.quantity;
    const product = await Product.findById(productId); //get a product in Product stock
    const diff = newQuantity - oldQuantity;

    if (diff >= 0) {
      //must take more from stock
      if (product.quantity < diff) {
        return res
          .status(400)
          .json({ message: `Not enough quantity for product ${product.name}` });
      }

      await substractProductInStock(product, diff);

      cartProduct.quantity = newQuantity;
      const updateCart = await cart.save();
      return res.status(200).json(updateCart);
    } else {
      await addProductInStock(product, -diff);

      cartProduct.quantity = newQuantity;
      const updateCart = await cart.save();
      return res.status(200).json(updateCart);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
