import { useReducer } from 'react'

export const useProvider = () => {
  const initialState = {
    isAuth: () => (window.sessionStorage.getItem('token'))
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          session: window.sessionStorage.setItem('token', action.payload)
        }

      default:
        return {
          ...state
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const onLogin = (token) => dispatch({ type: 'LOGIN', payload: token })

  return {
    state,
    onLogin
  }
}
