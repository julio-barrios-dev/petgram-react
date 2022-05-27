import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCard = () => {
  return (
    <ul>
      {[1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12].map(id => <PhotoCard key={id} id={id} />)}
    </ul>
  )
}
