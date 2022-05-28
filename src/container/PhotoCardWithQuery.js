import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql, useQuery } from '@apollo/client'

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      id
    }
  })
  if (loading) return <h2>Cargando...</h2>
  if (error) return <h2>Error</h2>

  return (
    <PhotoCard {...data.photo} />
  )
}
