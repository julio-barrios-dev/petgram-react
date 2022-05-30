import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../Context'
import { UseForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/RegisterMutation'

export const NotRegisterUser = () => {
  const { onLogin } = useContext(Context)
  const { registerMutation } = useRegisterMutation()
  const navigate = useNavigate()

  const submitLogin = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }
    registerMutation({ variables: variable })
      .then(() => {
        onLogin()
        navigate('/user')
      })

    // onLogin()
  }
  const handleSubmit = (e) => {
    onLogin()
    navigate('/user')
  }
  return (
    <>
      <div>
        <UseForm onSubmit={submitLogin} title={'Registrarse'} />
      </div>
      <div>
        <UseForm onSubmit={handleSubmit} title={'Iniciar Sesión'} />
      </div>
    </>
  )
}
