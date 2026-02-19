export const updateStockAndCart = async (products, dbProducts, cart) => {
  await Promise.all(
    products.map((p, index) => {
      const product = dbProducts[index];

      product.quantity -= p.quantity;

      //check if product exist in cart
      const cartProduct = cart.products.find(
        (item) => item.productId.toString() === p.productId,
      );

      if (cartProduct) {
        //if product exists in cart
        cartProduct.quantity += p.quantity;
      } else {
        cart.products.push({ productId: p.productId, quantity: p.quantity });
      }

      return product.save();
    }),
  );
};
