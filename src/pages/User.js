import React, { useContext } from 'react'
import Context from '../Context'
import { SubmitButton } from '../components/SubmitButton'

export const User = () => {
  const { onLogout } = useContext(Context)

  return (
    <div>
      <h1>User</h1>
      <SubmitButton onClick={onLogout} >Cerrar Sesión</SubmitButton>
    </div>
  )
}
