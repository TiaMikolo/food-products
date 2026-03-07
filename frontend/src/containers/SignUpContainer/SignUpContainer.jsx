import { Form, Flex } from 'antd'
import layout from '../../const/layout/layout'
import { flexSTyleSignUp, signUpContainerStyle } from './signUpContainer.css'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomInput from '../../components/CustomInput/CustomInput'
import { initialUser } from '../../const/user/user'

const SignUpContainer = () => {
  const onSubmitSignup = values => {
    console.log(values)
  }
  return (
    <Flex justify="center" align="center" style={flexSTyleSignUp}>
      <Form
        {...layout}
        name="nest-messages"
        style={signUpContainerStyle}
        initialValues={{ prefix: '+261', ...initialUser }}
        onFinish={onSubmitSignup}
      >
        <CustomInput
          name="name"
          label="Nom"
          rule={[{ required: true, message: 'Votre nom est requis!' }]}
          type="text"
          // value={user.name}
        />
        <CustomInput
          name="firstName"
          label="Prenom"
          rule={[{ required: true, message: 'Votre prénom est requis!' }]}
          type="text"
          // value={user.firstName}
        />
        <CustomInput
          name="email"
          label="Email"
          rule={[{ type: 'email', required: true, message: 'Votre e-mail est requis!' }]}
          type="text"
          // value={user.email}
        />
        <CustomInput
          type="phoneNumber"
          name="phoneNumber"
          label="Téléphone"
          rule={[{ required: true, message: 'Entrer votre numéro de téléphone!' }]}
          // value={user.phoneNumber}
        />
        <CustomInput
          type="password"
          name="password"
          label="Mot de passe"
          rule={[{ required: true, message: 'Entrer votre mot de passe!' }]}
          hasFeedback="hasFeedback"
          // value={user.password}
        />
        <CustomInput
          type="password"
          name="confirmPassword"
          label="Confirmer mot de passe"
          rule={[
            {
              required: true,
              message: 'Confirmer votre mot de passe!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(
                  new Error('Le nouveau mot de passe que vous avez saisi ne correspond pas!')
                )
              },
            }),
          ]}
          hasFeedback="hasFeedback"
        />
        <CustomButton content="S'inscrire" type="primary" htmlType="submit" />
      </Form>
    </Flex>
  )
}

export default SignUpContainer
