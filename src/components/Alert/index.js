import React, { useContext } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import Context from '../../Context'
import { useNavigate } from 'react-router-dom'
import { SubmitButton } from '../SubmitButton'
import { DivAlert, PAlert, ButtonClose } from './styles'

export const Alert = () => {
  const navigate = useNavigate()
  const { onAlert } = useContext(Context)

  const handler = () => {
    navigate('/NotRegisterUser')
    onAlert()
  }

  return (
    <DivAlert>
      <ButtonClose onClick={() => onAlert()}>
        <AiFillCloseCircle />
      </ButtonClose>
      <PAlert>Debes iniciar sesión para realizar la acción</PAlert>
      <SubmitButton onClick={handler}>Iniciar Sesión</SubmitButton>
    </DivAlert>
  )
}
