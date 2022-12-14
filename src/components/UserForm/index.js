import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './style'
import { SubmitButton } from '../SubmitButton'

export const UseForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()

    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Form onSubmit={handleSubmit} >
      <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder='Email'
          {...email}
        />
        <Input
          disabled={disabled}
          placeholder='Password'
          type='password'
          {...password}
          />
        <SubmitButton disabled={disabled} >{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
