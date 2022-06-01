import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

export const Detail = () => {
  const { detailId } = useParams()
  return <Layout title={`Fotografia ${detailId}`} >
           <PhotoCardWithQuery id={detailId} />
         </Layout>
}
