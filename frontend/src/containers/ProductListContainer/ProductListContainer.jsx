import ProductCard from '../../components/ProductCard/ProductCard'
import ProductList from '../../const/ProductList/ProductList'
import { Row, Col } from 'antd'

const ProductListContainer = () => {
  return (
    <Row gutter={[32, 32]} justify="space-between" align="middle">
      {ProductList.map(product => (
        <Col key={product.id}>
          <ProductCard
            label={product.name}
            img={product.image}
            productName={product.name}
            price={product.price}
          />
        </Col>
      ))}
    </Row>
  )
}

export default ProductListContainer
