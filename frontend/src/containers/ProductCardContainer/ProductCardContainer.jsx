import { Flex } from 'antd'
import ProductCard from '../../components/ProductCard/ProductCard'
import ProductList from '../../const/ProductList/ProductList'

const ProductCardContainer = () => {
  return (
    <Flex justify="space-around" align="flex-end" wrap>
      {ProductList.map(product => (
        <ProductCard
          key={product.id}
          label={product.name}
          img={product.image}
          productName={product.name}
          price={product.price}
        />
      ))}
    </Flex>
  )
}

export default ProductCardContainer
