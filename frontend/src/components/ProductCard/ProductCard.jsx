import { Card, Button, InputNumber } from 'antd'
import { useStyles } from './ProductCard.css';
const { Meta } = Card
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';


const ProductCard = ({ alt, img, productName, price }) => {
  const classes = useStyles();

      return (
        <Card
          hoverable
          className={classes.root}
          cover={
            <img
              draggable={false}
              alt={alt}
              src={img}
              className={classes.image}
            />
          }
        >
          <Meta title={productName} description={`${price} €`} />
        </Card>
      )
}
export default ProductCard
