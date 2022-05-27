import React from 'react'
import { Anchor, Image, Loading } from './styles'

export const Category = ({ cover, path, emoji = '?', loading = false }) => {
  if (loading) {
    return <Anchor href={path}>
             <Loading />
             {emoji}
           </Anchor>
  }
  return <Anchor href={path}>
           <Image src={cover} />
           {emoji}
         </Anchor>
}
