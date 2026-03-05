import { Form } from 'antd'
import { Input, Space } from 'antd'
import prefixSelector from '../../const/prefixSelector/prefixSelector'
import { customInputStyle, customInputPhoneNumberStyle } from './CustomInput.css'

const renderInput = type => {
  switch (type) {
    case 'text':
      return <Input style={customInputStyle} />
    case 'password':
      return <Input.Password style={customInputStyle} />
    case 'phoneNumber':
      return (
        <Space.Compact block>
          {prefixSelector}
          <Input style={customInputPhoneNumberStyle} />
        </Space.Compact>
      )
    default:
      return <Input style={customInputStyle} />
  }
}

const CustomInput = ({ name, label, rule, type = 'text', dependencies, hasFeedback }) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={rule}
      dependencies={dependencies}
      hasFeedback={hasFeedback}
    >
      {renderInput(type)}
    </Form.Item>
  )
}

export default CustomInput
