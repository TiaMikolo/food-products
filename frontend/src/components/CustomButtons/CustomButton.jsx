import { Button } from 'antd'

const CustomButton = ({ onClick, label, color = 'purple', variant = 'outlined' }) => {
  return (
    <Button color={color} variant={variant} onClick={onClick}>
      {label}
    </Button>
  )
}

export default CustomButton
