import React from 'react'
import { ListOfFavorite } from '../components/ListOfFavs'
import { Layout } from '../components/Layout'

const Favs = () => (
    <Layout
      title='Tus favoritos'
      content='Aqui puedes encontrar tus favoritos'
      subtitle='Aqui puedes encontrar tus favoritos'
      >
      <ListOfFavorite />
    </Layout>
)

export default Favs
