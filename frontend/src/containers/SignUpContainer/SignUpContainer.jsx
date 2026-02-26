import { Form, Flex } from 'antd'
import FormItemPhoneNumber from '../../components/InputComponents/FormItemPhoneNumber'
import SignUpOrSignInButton from '../../components/CustomButtons/SignUpAndSignInButton'
import layout from '../../const/layout/layout'
import signUpContainerStyle from './signUpContainer.css'
import flexSTyleSignUp from './flexStyleSignUp.css'
import InputDetail from '../../components/InputComponents/InputDetail'
import InputPassword from '../../components/InputComponents/InputPassword'

const SignUpContainer = () => {
  return (
    <Flex justify="center" align="center" style={flexSTyleSignUp}>
      <Form {...layout} name="nest-messages" style={signUpContainerStyle}>
        <InputDetail role="user" roleDetail="name" label="Name" rule={[{ required: true }]} />
        <InputDetail
          role="user"
          roleDetail="Firstname"
          label="FirstName"
          rule={[{ required: true }]}
        />
        <InputDetail
          role="user"
          roleDetail="email"
          label="Email"
          rule={[{ type: 'email', required: true }]}
        />
        <InputPassword name="password" label="Password" />
        <InputPassword
          name={['user', 'password']}
          label="Confirm Password"
          dependencies={['password']}
          confirmation={true}
        />
        <FormItemPhoneNumber role="user" rolePhoneNumber="phoneNumber" />
        <SignUpOrSignInButton content="Sign Up" />
      </Form>
    </Flex>
  )
}

export default SignUpContainer
