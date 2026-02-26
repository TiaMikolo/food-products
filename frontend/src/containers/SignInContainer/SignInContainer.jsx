import { Flex, Form } from 'antd'
import SignUpOrSignInButton from '../../components/CustomButtons/SignUpAndSignInButton'
import layout from '../../const/layout/layout'
import signInContainerStyle from './signInContainer.css'
import flexSTyleSignIn from './flexStyleSignIn.css'
import InputDetail from '../../components/InputComponents/InputDetail'

const SignContainer = () => {
  return (
    <Flex justify="center" align="center" style={flexSTyleSignIn}>
      <Form {...layout} name="nest-messages" style={signInContainerStyle}>
        <InputDetail role="user" roleDetail="name" label="Name" rule={[{ required: true }]} />
        <InputDetail
          role="user"
          roleDetail="email"
          label="Email"
          rule={[{ type: 'email', required: true }]}
        />
        <FormItemPassWord name={['user', 'password']} />
        <SignUpOrSignInButton content="Sign In" />
      </Form>
    </Flex>
  )
}

export default SignContainer
