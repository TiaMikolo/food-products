import { Form, Input } from 'antd'

const InputDetail = ({ role, roleDetail, label, rule }) => {
  return (
    <Form.Item name={[role, roleDetail]} label={label} rules={rule}>
      <Input />
    </Form.Item>
  )
}

export default InputDetail
