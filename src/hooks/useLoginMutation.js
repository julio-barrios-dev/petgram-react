import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login (input: $input)
}
`

export const useLoginMutation = () => {
  const [loginMutation, {
    loading: loginLoading,
    error: loginError
  }] = useMutation(LOGIN)

  return { loginMutation, loginLoading, loginError }
}
