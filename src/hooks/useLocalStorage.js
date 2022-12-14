import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [storedValue, setStoreValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })
  const setLocalStarage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoreValue(value)
    } catch (error) {
      console.error(error)
    }
  }
  return [storedValue, setLocalStarage]
}
