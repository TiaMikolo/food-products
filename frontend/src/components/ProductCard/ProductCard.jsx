import { Card } from 'antd'
import styleCard from './ProductCard.css'
const { Meta } = Card

const ProductCard = ({ alt, img, productName, price }) => (
  <Card
    hoverable
    style={styleCard}
    cover={
      <img
        draggable={false}
        alt={alt}
        src={img}
        width={'232px'}
        height={'232px'}
        style={{ objectFit: 'contain' }}
      />
    }
  >
    <Meta title={productName} description={`${price} €`} />
  </Card>
)
export default ProductCard
