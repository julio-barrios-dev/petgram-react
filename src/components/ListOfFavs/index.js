import React from 'react'
import { useGetFavorite } from '../../hooks/useGetFavorite'
import { Link, Grid, Img } from './styles'

export const ListOfFavorite = () => {
  const { loading, error, data } = useGetFavorite()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  const { favs } = data

  return <Grid>
    {
      favs.map(fav => <Link key={fav.id} to={`/detail/${fav.id}`}>
                        <Img src={fav.src}/>
                      </Link>)
    }
  </Grid>
}
