import Product from "../../../models/product.js";

export const updateProduct = async (req, res) => {
  try {
    const { name, quantity, price } = req.body;
    const { id } = req.params;

    const updateProduct = await Product.findByIdAndUpdate(
      id,
      { name, quantity, price },
      { new: true },
    );

    if (!updateProduct)
      return res.status(404).json({ message: "product not found" });
    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
