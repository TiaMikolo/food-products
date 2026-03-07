import { Form } from 'antd'
import { Input, Space } from 'antd'
import prefixSelector from '../../const/prefixSelector/prefixSelector'
import { customInputStyle } from './CustomInput.css'

const renderInput = (type, value, onChange) => {
  switch (type) {
    case 'text':
      return <Input style={customInputStyle} value={value} onChange={onChange} />
    case 'password':
      return <Input.Password style={customInputStyle} value={value} onChange={onChange} />
    case 'phoneNumber':
      return (
        <Space.Compact block style={customInputStyle}>
          {prefixSelector}
          <Input value={value} onChange={onChange} />
        </Space.Compact>
      )
    default:
      return <Input style={customInputStyle} value={value} onChange={onChange} />
  }
}

const CustomInput = ({
  name,
  label,
  rule,
  type = 'text',
  dependencies,
  hasFeedback,
  value,
  onChange,
}) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={rule}
      dependencies={dependencies}
      hasFeedback={hasFeedback}
    >
      {renderInput(type, value, onChange)}
    </Form.Item>
  )
}

export default CustomInput
