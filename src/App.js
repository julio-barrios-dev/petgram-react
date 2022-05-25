import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './components/styles/GlobalStyles'
import { ListOfPhotoCard } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCard />
    </>
  )
}
