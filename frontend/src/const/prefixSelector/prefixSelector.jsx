import { Form, Select } from 'antd'
import selectStyle from './perfixSelector.css'

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={selectStyle}
      defaultValue={'+261'}
      options={[{ label: '+261', value: '+261' }]}
    />
  </Form.Item>
)

export default prefixSelector
