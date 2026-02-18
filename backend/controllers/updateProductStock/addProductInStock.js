export const addProductInStock = async (productInStock, quantity) => {
    productInStock.quantity += quantity
    await productInStock.save()
}