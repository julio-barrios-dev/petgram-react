import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Joi from 'joi'
import Context from '../Context'
import { UseForm } from '../components/UserForm'
import { Layout } from '../components/Layout'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

const userSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.empty': '*Email es requerido',
    'string.email': '*Email es invalido'
  }),
  password: Joi.string().min(3).max(15).required().messages({
    'string.empty': '*Password es requerido',
    'string.email': '*Password es invalido',
    'string.min': '*Password debe ser mayor a 3 caracteres',
    'string.max': '*Password debe ser menor a 15 caracteres'
  })
})

export const NotRegisterUser = () => {
  const { onLogin } = useContext(Context)
  const { registerMutation, registerLoading, registerError } = useRegisterMutation()
  const { loginMutation, loginLoading, loginError } = useLoginMutation()
  const [errValidation, setErrValidation] = useState('')
  let errMessageRegister = ''

  const navigate = useNavigate()

  const submitLogin = ({ email, password }) => {
    const input = { email, password }

    // validate User
    const value = userSchema.validate(input, { abortEarly: false })
    if (value.error) {
      const errors = value.error.details.map((err) => err.message).join(' ')
      setErrValidation((prev) => errors)
      console.log()
      return null
    }

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

  if (errValidation !== '') {
    errMessageRegister = errValidation
  }
  if (registerError) {
    errMessageRegister = 'El usuario ya existe o algo salió mal'
  }

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
