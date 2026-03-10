import { Form } from 'antd'
import { Input, Space } from 'antd'
import prefixSelector from '../../const/prefixSelector/prefixSelector'
import { useStyles } from './CustomInput.css'

const { TextArea } = Input

const RenderInput = (type, value, onChange, placeholder) => {
  const classes = useStyles()
  switch (type) {
    case 'text':
      return (
        <Input
          className={classes.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )
    case 'password':
      return (
        <Input.Password
          className={classes.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )
    case 'phoneNumber':
      return (
        <Space.Compact block className={classes.input}>
          {prefixSelector}
          <Input value={value} onChange={onChange} placeholder={placeholder} />
        </Space.Compact>
      )
    case 'textArea':
      return (
        <TextArea
          value={value}
          onChange={onChange}
          rows={2}
          className={classes.input}
          placeholder={placeholder}
        />
      )
    default:
      return (
        <Input
          className={classes.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )
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
  placeholder,
}) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={rule}
      dependencies={dependencies}
      hasFeedback={hasFeedback}
    >
      {RenderInput(type, value, onChange, placeholder)}
    </Form.Item>
  )
}

export default CustomInput
