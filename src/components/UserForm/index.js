import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './style'

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
        <Button disabled={disabled} >{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}