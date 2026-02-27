import { Input, Space } from 'antd'
import prefixSelector from '../../const/prefixSelector/prefixSelector'
import {
  customInput,
  customInputPhoneNumber,
} from '../../components/InputComponents/OutlinedInput.css'

const renderInput = type => {
  switch (type) {
    case 'text':
      return <Input style={customInput} />
    case 'password':
      return <Input.Password style={customInput} />
    case 'phoneNumber':
      return (
        <Space.Compact block>
          {prefixSelector}
          <Input style={customInputPhoneNumber} />
        </Space.Compact>
      )
    default:
      return <Input style={customInput} />
  }
}

export default renderInput
