import Product from "../../../models/product.js";

export const readProductBySearchTerm = async (req, res) => {
  try {
    const text = req.query.text;
    const products = await Product.find({
      name: { $regex: text, $options: "i" },
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
