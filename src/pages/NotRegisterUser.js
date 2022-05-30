import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../Context'
import { UseForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/RegisterMutation'

export const NotRegisterUser = () => {
  const { onLogin } = useContext(Context)
  const { registerMutation, data, loading, error } = useRegisterMutation()
  const navigate = useNavigate()

  console.log({ data, loading, error })

  const submitLogin = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }
    registerMutation({ variables: variable })
      .then(() => {
        onLogin()
        navigate('/user')
      })
  }
  const handleSubmit = (e) => {
    onLogin()
    navigate('/user')
  }

  const errMessage = error && 'El usuario ya existe o algo salió mal'

  return (
    <>
      <div>
        <UseForm disabled={loading} error={errMessage} onSubmit={submitLogin} title={'Registrarse'} />
      </div>
      <div>
        <UseForm onSubmit={handleSubmit} title={'Iniciar Sesión'} />
      </div>
    </>
  )
}
