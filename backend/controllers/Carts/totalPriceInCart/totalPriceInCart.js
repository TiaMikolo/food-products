import Cart from "../../../models/cart.js";
import Product from "../../../models/product.js";

export const totalPriceInCart = async (req, res) => {
  const userId = req.user.id;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const dbProducts = await Promise.all(
      cart.products.map((p) => Product.findById(p.productId)),
    );

    const total = dbProducts.reduce((totalPrice, product, index) => {
      if (product) {
        totalPrice += product.price * cart.products[index].quantity;
      }
      return totalPrice;
    }, 0);

    return res.status(200).json({ total });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
