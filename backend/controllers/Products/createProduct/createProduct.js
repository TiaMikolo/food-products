import Product from "../../../models/product.js";

export const createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const existingProduct = await Product.findOne({ name });

    if (existingProduct) {
      existingProduct.quantity += quantity;
      await existingProduct.save();
      return res.status(200).json(existingProduct);
    } else {
      const product = new Product(req.body);
      const saveProduct = await product.save();
      return res.status(201).json(saveProduct);
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
