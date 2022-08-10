import React from 'react'
import { PhotoCard } from '../../components/PhotoCard'
import { useGetByCategoryPhotos } from '../../hooks/useGetByCategoryPhotos'
import { ListPhoto } from './styles'

const render = ({ categoryId }) => {
  const { loading, error, data } = useGetByCategoryPhotos({ categoryId })
  if (loading) {
    return <h2>cargando...</h2>
  }
  if (error) {
    return <h2>Error</h2>
  }
  return (
    <ListPhoto>
      {data.photos.map(photo => (<PhotoCard key={photo.id} likes= {-1} {...photo}/>))}
    </ListPhoto>
  )
}

export const ListOfPhotoCards = ({ categoryId }) => {
  return render({ categoryId })
}
