import { Form, Input, Space } from 'antd'
import prefixSelector from '../../const/prefixSelector/prefixSelector'

const FormItemPhoneNumber = ({ role, rolePhoneNumber }) => {
  return (
    <Form.Item
      name={[role, rolePhoneNumber]}
      label="Phone Number"
      rules={[
        { required: true, message: 'Please input your phone number!' },
        { type: 'tel', message: 'The input is not valid phone number!' },
      ]}
    >
      <Space.Compact block>
        {prefixSelector}
        <Input style={{ width: '100%' }} />
      </Space.Compact>
    </Form.Item>
  )
}

export default FormItemPhoneNumber
