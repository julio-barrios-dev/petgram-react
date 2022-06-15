import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../Context'
import { UseForm } from '../components/UserForm'
import { Layout } from '../components/Layout'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

export const NotRegisterUser = () => {
  const { onLogin } = useContext(Context)
  const { registerMutation, registerLoading, registerError } = useRegisterMutation()
  const { loginMutation, loginLoading, loginError } = useLoginMutation()

  const navigate = useNavigate()

  const submitLogin = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }
    registerMutation({ variables: variable })
      .then(({ data }) => {
        const { signup } = data
        onLogin(signup)
        navigate('/user')
      })
  }
  const handleSubmit = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }
    loginMutation({ variables: variable })
      .then(({ data }) => {
        const { login } = data
        onLogin(login)
        navigate('/user')
      })
  }

  const errMessageRegister = registerError
    ? 'El usuario ya existe o algo salió mal'
    : ''
  const errMessageLogin = loginError
    ? 'La contraseña no es correcta o el usuario no existe'
    : ''

  return (
    <Layout title='Hola!' subtitle='Registrate o inicia sesión' >
      <UseForm disabled={registerLoading} error={errMessageRegister} onSubmit={submitLogin} title={'Registrarse'} />
      <UseForm disabled={loginLoading} error={errMessageLogin} onSubmit={handleSubmit} title={'Iniciar Sesión'} />
    </Layout>
  )
}
