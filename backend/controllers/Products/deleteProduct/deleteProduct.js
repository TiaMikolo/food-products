import Product from "../../../models/product.js";

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    if (!deleteProduct)
      return res.status(404).json({ message: "product not found" });
    res.status(200).json({ message: "product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
