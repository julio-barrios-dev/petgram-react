import React, { useEffect, useState, useRef } from 'react'
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'
import { Category } from '../Category'
import {
  ContainerListCategory,
  List,
  Item,
  ButtonRight,
  ButtonLeft
} from './styles'

import { useFetchData } from '../../hooks/useFetchData'

const API = 'https://petgram-server-juliobc.vercel.app/categories'

const ListOfCategoriesComponent = () => {
  const { data, loading } = useFetchData(API)
  const [showFixed, setShowFixed] = useState(false)
  const list = useRef('')

  const scrollFunctionRight = () => {
    list.current.scrollBy({
      top: 0,
      left: 35,
      behavior: 'smooth'
    })
  }
  const scrollFunctionLeft = () => {
    list.current.scrollBy({
      top: 0,
      left: -35,
      behavior: 'smooth'
    })
  }

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
    <ContainerListCategory>
      <List fixed={fixed} ref={(!fixed && list) || null}>
      {
        loading
          ? data.map((_, index) => <Item key={index} ><Category loading={true} /></Item>)
          : data.map((category, index) =>
          <Item key={index}><Category {...category} path={`/pet/${category.id}`}/></Item>)
      }
      </List>
      <ButtonRight onClick={scrollFunctionRight} >
        <AiFillRightCircle />
      </ButtonRight>
      <ButtonLeft onClick={scrollFunctionLeft}>
        <AiFillLeftCircle />
      </ButtonLeft>
    </ContainerListCategory>
  )
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
