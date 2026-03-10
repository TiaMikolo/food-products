import { Typography } from 'antd'
import { useStyles } from './CustomTypography.css'
const { Text } = Typography
const { Title } = Typography

const CustomTypography = ({ text, type }) => {
  const classes = useStyles()
  switch (type) {
    case 'text':
      return <Text className={classes.textContainer}>{text}</Text>
    case 'title':
      return <Title level={4}>{text}</Title>
  }
}

export default CustomTypography
