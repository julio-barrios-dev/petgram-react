import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../Context'

export const NotRegisterUser = () => {
  const { onLogin } = useContext(Context)
  const navigate = useNavigate()

  const handleSubmit = e => {
    onLogin()
    navigate('/user')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <button>iniciar Sesión</button>
      </form>
    </div>
  )
}
