import { useState, useEffect } from 'react'

export function useFetchData (API) {
  const [data, setData] = useState([1, 2, 3, 4, 5])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(API)
      .then(res => res.json())
      .then(response => {
        setData(response)
        setLoading(false)
      })
  }, [])

  return { data, loading }
}
