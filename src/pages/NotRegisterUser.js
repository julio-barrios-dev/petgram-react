import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../Context'
import { UseForm } from '../components/UserForm'

export const NotRegisterUser = () => {
  const { onLogin } = useContext(Context)
  const navigate = useNavigate()

  const handleSubmit = e => {
    onLogin()
    navigate('/user')
  }
  return (
    <>
      <div>
        <UseForm onSubmit={handleSubmit} title={'Registrarse'} />
      </div>
      <div>
        <UseForm onSubmit={handleSubmit} title={'Iniciar Sesión'} />
      </div>
    </>
  )
}
