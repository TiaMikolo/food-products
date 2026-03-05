import { Card } from 'antd'
const { Meta } = Card
import { useStyles } from './CustomCard.css';

const CustomCard = ({ alt, img, productName, price }) => {
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
export default CustomCard
