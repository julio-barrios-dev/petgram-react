import React from 'react'
import { useProvider } from './hooks/useProvider'
import Context from './Context'

export const AppProvider = ({ children }) => {
  return (
    <Context.Provider value={useProvider()}>
      {children}
    </Context.Provider>
  )
}
