export const checkProducts = (products, dbProducts) => {
  products.forEach((p, index) => {
    const product = dbProducts[index];

    if (!product) {
      const err = new Error(`Product with id ${p.productId} not found`);
      err.status = 404;
      throw err;
    }

    if (product.quantity < p.quantity) {
      const err = new Error(`Not enough quantity for product ${product.name}`);
      err.status = 400;
      throw err;
    }
  });
};
