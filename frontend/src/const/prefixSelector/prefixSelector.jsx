import { Form, Select } from 'antd'

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{ width: 80 }}
      defaultValue={'+261'}
      options={[{ label: '+261', value: '+261' }]}
    />
  </Form.Item>
)

export default prefixSelector
