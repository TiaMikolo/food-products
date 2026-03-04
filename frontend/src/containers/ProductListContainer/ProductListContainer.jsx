import ProductCard from '../../components/ProductCard/ProductCard'
import ProductList from '../../const/ProductList/ProductList'
import { Row, Col } from 'antd'
import { useStyles } from './ProductListContainer.css';

const ProductListContainer = () => {
  const classes = useStyles();
  return (
    <Row className={classes.rowCustom} gutter={[32, 32]} justify={'center'} align={'bottom'}>
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
