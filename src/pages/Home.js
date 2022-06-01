import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const Home = () => {
  const { id } = useParams()

  return (
    <Layout
      title='La app de fotos para mascotas'
      subtitle='Con petgram puedes encontrar fotos de animales domésticos muy bonitos'
      >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}
