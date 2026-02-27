import { Button, Form } from 'antd'
import tailFormItemLayout from '../../const/tailFormItemLayout/tailFormItemLayout'

const CustomButton = ({ content, onClick, type, htmlType }) => {
  return (
    <Form.Item {...tailFormItemLayout}>
      <Button type={type} htmlType={htmlType} onClick={onClick}>
        {content}
      </Button>
    </Form.Item>
  )
}

export default CustomButton
