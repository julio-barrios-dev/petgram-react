import React from 'react'
import { Link, Image, Loading } from './styles'

export const Category = ({ cover, path = '#', emoji = '?', loading = false }) => {
  if (loading) {
    return <Link to={path}>
             <Loading />
             {emoji}
           </Link>
  }
  return <Link to={path}>
           <Image src={cover} />
           {emoji}
         </Link>
}
