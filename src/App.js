import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisterUser } from './pages/NotRegisterUser'
import Context from './Context'

export const App = () => {
  const { state: { isAuth } } = useContext(Context)
  console.log(isAuth())
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Logo />
        <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/pet/:id' element={<Home />} />
              <Route path='/detail/:detailId' element={<Detail/>} />
              <Route path='/favs' element={isAuth() ? <Favs /> : <Navigate to='/NotRegisterUser' /> } />
              <Route path='/user' element={isAuth() ? <User /> : <Navigate to='/NotRegisterUser' /> } />
              <Route path='/NotRegisterUser' element={<NotRegisterUser />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  )
}
