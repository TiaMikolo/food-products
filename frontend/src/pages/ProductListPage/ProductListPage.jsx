import ProductListContainer from '../../containers/ProductListContainer/ProductListContainer'
import { useGetProducts } from '../../api/product'

const ProductListPage = () => {
  const { listProduct } = useGetProducts()

  return <ProductListContainer productsList={listProduct} />
}

export default ProductListPage
