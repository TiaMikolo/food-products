import { Card } from 'antd'
import styleCard from './ProductCard.css'
const { Meta } = Card

const ProductCard = ({ alt, img, productName, price }) => (
  <Card hoverable style={styleCard} cover={<img draggable={false} alt={alt} src={img} />}>
    <Meta title={productName} description={`${price} £`} />
  </Card>
)
export default ProductCard
