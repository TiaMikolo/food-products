import { Form, Input } from 'antd'

const InputPassword = ({ name, label, dependencies = [], confirmation = false }) => {
  return (
    <Form.Item
      name={name}
      label={label}
      dependencies={confirmation ? dependencies : []}
      hasFeedback
      rules={[
        {
          required: true,
          message: confirmation ? 'Please confirm your password!' : 'Please input your password!',
        },
        ...(confirmation
          ? [
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    new Error('The new password that you entered do not match!')
                  )
                },
              }),
            ]
          : []),
      ]}
    >
      <Input.Password />
    </Form.Item>
  )
}

export default InputPassword
