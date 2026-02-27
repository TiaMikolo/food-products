import { Form } from 'antd'
import renderInput from '../../utils/OutlinedInput/renderInput'

const OutlinedInput = ({ name, label, rule, type = 'text', dependencies, hasFeedback }) => {
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

export default OutlinedInput
