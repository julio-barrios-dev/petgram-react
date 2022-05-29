import { useReducer } from 'react'

export const useProvider = () => {
  const initialState = {
    isAuth: false
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuth: true
        }

      default:
        return {
          ...state
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const onLogin = () => dispatch({ type: 'LOGIN' })

  return {
    state,
    onLogin
  }
}
