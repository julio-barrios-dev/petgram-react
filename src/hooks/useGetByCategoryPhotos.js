import { useQuery, gql } from '@apollo/client'

export function useGetByCategoryPhotos ({ categoryId }) {
  const withPhotos = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id 
    categoryId 
    src 
    likes 
    userId 
    liked 
    }
  }`

  const { loading, error, data } = useQuery(withPhotos, { variables: { categoryId } })

  return { loading, error, data }
}
