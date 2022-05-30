import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './style'

export const UseForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit} >
        <Input
          placeholder='Email'
          {...email}
        />
        <Input
          placeholder='Password'
          type='password'
          {...password}
          />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
