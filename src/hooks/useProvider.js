import { useReducer } from 'react'
import { useApolloClient } from '@apollo/client'

export const useProvider = () => {
  const __APOLLO_CLIENT__ = useApolloClient()

  const initialState = {
    isAuth: () => {
      if (window.sessionStorage.getItem('token') !== null) {
        return true
      }
    }
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        window.sessionStorage.setItem('token', action.payload)
        return {
          ...state
        }
      case 'LOGOUT':
        window.sessionStorage.removeItem('token')
        __APOLLO_CLIENT__.resetStore()
        return {
          ...state

        }
      default:
        return {
          ...state
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const onLogin = (token) => dispatch({ type: 'LOGIN', payload: token })
  const onLogout = () => dispatch({ type: 'LOGOUT' })

  return {
    state,
    onLogin,
    onLogout
  }
}
