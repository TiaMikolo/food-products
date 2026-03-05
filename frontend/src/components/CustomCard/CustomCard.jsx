import { Card } from 'antd'
const { Meta } = Card
import { useStyles } from './CustomCard.css';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const CustomCard = ({ alt, img, productName, price, quantity = 0, onClickMinus, onClickPlus }) => {
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
      actions={[
        <MinusOutlined key="minus" onClick={onClickMinus} />,
          <Typography.Text key="edit">{quantity}</Typography.Text>,
        <PlusOutlined key="plus" onClick={onClickPlus} />,
      ]}
    >
    <Meta title={productName} description={`${price} €`} />
    </Card>
  )
}
export default CustomCard
