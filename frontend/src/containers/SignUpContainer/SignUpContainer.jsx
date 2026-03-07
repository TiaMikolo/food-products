import { Form, Flex } from 'antd'
import layout from '../../const/layout/layout'
import { flexSTyleSignUp, signUpContainerStyle } from './signUpContainer.css'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomInput from '../../components/CustomInput/CustomInput'
import { useState } from 'react'
import { initialUser } from '../../const/user/user'

const SignUpContainer = () => {
  const [user, setUser] = useState(initialUser)
  const onSubmitSignup = () => {
    console.log(user)
  }
  const handleChangeName = e => {
    setUser({
      ...user,
      name: e.target.value,
    })
  }
  const handleChangeFirstName = e => {
    setUser({
      ...user,
      firstName: e.target.value,
    })
  }
  const handleChangeEmail = e => {
    setUser({
      ...user,
      email: e.target.value,
    })
  }
  const handleChangePassword = e => {
    setUser({
      ...user,
      password: e.target.value,
    })
  }
  const handleChangePhoneNumber = e => {
    setUser({
      ...user,
      phoneNumber: e.target.value,
    })
  }

  return (
    <Flex justify="center" align="center" style={flexSTyleSignUp}>
      <Form
        {...layout}
        name="nest-messages"
        style={signUpContainerStyle}
        initialValues={{ prefix: '+261' }}
        onFinish={onSubmitSignup}
      >
        <CustomInput
          name="name"
          label="Nom"
          rule={[{ required: true, message: 'Votre nom est requis!' }]}
          type="text"
          value={user.name}
          onChange={handleChangeName}
        />
        <CustomInput
          name="firstName"
          label="Prenom"
          rule={[{ required: true, message: 'Votre prénom est requis!' }]}
          type="text"
          value={user.firstName}
          onChange={handleChangeFirstName}
        />
        <CustomInput
          name="email"
          label="Email"
          rule={[{ type: 'email', required: true, message: 'Votre e-mail est requis!' }]}
          type="text"
          value={user.email}
          onChange={handleChangeEmail}
        />
        <CustomInput
          type="phoneNumber"
          name="phoneNumber"
          label="Téléphone"
          rule={[{ required: true, message: 'Entrer votre numéro de téléphone!' }]}
          value={user.phoneNumber}
          onChange={handleChangePhoneNumber}
        />
        <CustomInput
          type="password"
          name="password"
          label="Mot de passe"
          rule={[{ required: true, message: 'Entrer votre mot de passe!' }]}
          hasFeedback="hasFeedback"
          value={user.password}
          onChange={handleChangePassword}
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
        <CustomButton
          content="S'inscrire"
          type="primary"
          htmlType="submit"
          // onClick={onSubmitSignup }
        />
      </Form>
    </Flex>
  )
}

export default SignUpContainer
