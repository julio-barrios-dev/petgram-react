import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
  signup (input: $input)
}
`

export const useRegisterMutation = () => {
  const [registerMutation, {
    loading: registerLoading,
    error: registerError
  }] = useMutation(REGISTER)

  return { registerMutation, registerError, registerLoading }
}
