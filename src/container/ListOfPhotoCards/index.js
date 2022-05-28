import React from 'react'
import { PhotoCard } from '../../components/PhotoCard'
import { useGetByCategoryPhotos } from '../../hooks/useGetByCategoryPhotos'

const render = ({ categoryId }) => {
  const { loading, error, data } = useGetByCategoryPhotos({ categoryId })
  if (loading) {
    return <h2>cargando...</h2>
  }
  if (error) {
    return <h2>Error</h2>
  }
  return (
    <ul>
      {data.photos.map(photo => (<PhotoCard key={photo.id} {...photo}/>))}
    </ul>
  )
}

export const ListOfPhotoCards = ({ categoryId }) => {
  return render({ categoryId })
}
