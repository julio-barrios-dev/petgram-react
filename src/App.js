import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './GlobalStyles'
import { ListOfPhotoCard } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
// import Logo from './components/Logo/petgram.svg'
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
