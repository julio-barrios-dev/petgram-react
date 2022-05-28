import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

import { useFetchData } from '../../hooks/useFetchData'

const API = 'https://petgram-server-juliobc.vercel.app/categories'

export const ListOfCategories = () => {
  const { data, loading } = useFetchData(API)

  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? data.map((num, index) => <Item key={index} ><Category loading={true} /></Item>)
          : data.map((category) =>
          <Item key={category.id}><Category {...category} path={`/pet/${category.id}`}/></Item>)
      }
    </List>
  )
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
