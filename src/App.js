import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisterUser } from './pages/NotRegisterUser'

export const App = () => {
  const isLogged = false

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Logo />
        <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/pet/:id' element={<Home />} />
              <Route path='/detail/:detailId' element={<Detail/>} />
              <Route path='/favs' element={isLogged ? <Favs /> : <Navigate to='/NotRegisterUser' /> } />
              <Route path='/user' element={isLogged ? <User /> : <Navigate to='/NotRegisterUser' /> } />
              <Route path='/NotRegisterUser' element={<NotRegisterUser />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  )
}
