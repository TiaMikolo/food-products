export const substractProductInStock = async (productInStock, quantity) => {
  productInStock.quantity -= quantity;
  await productInStock.save();
};
