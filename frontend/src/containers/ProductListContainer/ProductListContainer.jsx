import CustomCard from '../../components/CustomCard/CustomCard'
import ProductList from '../../const/ProductList/ProductList'
import { Row, Col } from 'antd'

const ProductCardContainer = () => {
  return (
    <Row gutter={[32, 32]} justify="space-between" align="middle">
      {ProductList.map(product => (
        <Col key={product.id}>
          <CustomCard
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

export default ProductCardContainer
