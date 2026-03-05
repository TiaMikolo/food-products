import CustomCard from '../../components/CustomCard/CustomCard'
import ProductList from '../../const/ProductList/ProductList'
import { Row, Col } from 'antd'
import { useStyles } from './ProductListContainer.css';

const ProductCardContainer = () => {
  const classes = useStyles();
  return (
    <Row className={classes.rowCustom} gutter={[32, 16]} justify="center" align="bottom">
      {ProductList.map(product => (
        <Col key={product.id} className={classes.colCustom}>
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
