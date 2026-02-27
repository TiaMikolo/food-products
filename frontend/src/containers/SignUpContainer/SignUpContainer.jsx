import { Form, Flex } from 'antd'
import layout from '../../const/layout/layout'
import { flexSTyleSignUp, signUpContainerStyle } from './signUpContainer.css'
import CustomButton from '../../components/CustomButtons/CustomButton'
import OutlinedInput from '../../components/InputComponents/OutlinedInput'

const SignUpContainer = () => {
  return (
    <Flex justify="center" align="center" style={flexSTyleSignUp}>
      <Form {...layout} name="nest-messages" style={signUpContainerStyle}>
        <OutlinedInput
          name={['user', 'name ']}
          label="Name"
          rule={[{ required: true }]}
          type="text"
        />
        <OutlinedInput
          name={['user', 'FirstName ']}
          label="FirstName"
          rule={[{ required: true }]}
          type="text"
        />
        <OutlinedInput
          name={['user', 'email ']}
          label="Email"
          rule={[{ type: 'email', required: true }]}
          type="text"
        />
        <OutlinedInput
          type="password"
          name="password"
          label="Password"
          rule={[{ required: true, message: 'Please input your password!' }]}
          hasFeedback="hasFeedback"
        />
        <OutlinedInput
          type="password"
          name={['user', 'password']}
          label="Confirm Password"
          rule={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('The new password that you entered do not match!'))
              },
            }),
          ]}
          hasFeedback="hasFeedback"
        />
        <OutlinedInput type="phoneNumber" name={['user', 'phonNumber']} label="PhoneNumber" />
        <CustomButton content="Sign Up" type="primary" htmlType="submit" />
      </Form>
    </Flex>
  )
}

export default SignUpContainer
