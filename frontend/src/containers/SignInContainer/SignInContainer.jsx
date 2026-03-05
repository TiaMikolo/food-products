import { Flex, Form } from 'antd'
import layout from '../../const/layout/layout'
import { flexSTyleSignIn, signInContainerStyle } from './signInContainer.css'
import CustomButton from '../../components/CustomButtons/CustomButton'
import OutlinedInput from '../../components/CustomInput/CustomInput'
import CustomInput from '../../components/CustomInput/CustomInput'

const SignContainer = () => {
  return (
    <Flex justify="center" align="center" style={flexSTyleSignIn}>
      <Form {...layout} name="nest-messages" style={signInContainerStyle}>
        <CustomInput
          type="text"
          name={['user', 'name ']}
          label="Name"
          rule={[{ required: true }]}
        />
        <CustomInput
          type="text"
          name={['user', 'email ']}
          label="Email"
          rule={[{ type: 'email', required: true }]}
        />
        <CustomInput
          type="password"
          name={['user', 'password']}
          label="Password"
          rule={[{ required: true, message: 'Please input your password!' }]}
          hasFeedback="hasFeedback"
        />
        <CustomButton content="Sign In" type="primary" htmlType="submit" />
      </Form>
    </Flex>
  )
}

export default SignContainer
