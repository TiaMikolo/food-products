import { Button, Form } from 'antd'
import tailFormItemLayout from '../../const/tailFormItemLayout/tailFormItemLayout'

const SignUpOrSignInButton = ({ content }) => {
  return (
    <Form.Item {...tailFormItemLayout}>
      <Button type="primary" htmlType="submit">
        {content}
      </Button>
    </Form.Item>
  )
}

export default SignUpOrSignInButton
