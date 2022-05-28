import { useMutation, gql } from '@apollo/client'

const LIKE_PHOTO = gql`
mutation likeAnonimousPhoto($input: LikePhoto!) {
  likeAnonymousPhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`
export const useMutationToogleLike = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(LIKE_PHOTO)
  return { mutation, mutationLoading, mutationError }
}
