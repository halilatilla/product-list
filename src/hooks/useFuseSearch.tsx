import { useState, useEffect } from 'react'
import Fuse from 'fuse.js'

export default function useFuseSearch(keys: string[] = []) {
  const [value, setValue] = useState([])

  const fuse = new Fuse(value, {
    keys,
    threshold: 0.3,
  })

  useEffect(() => {
    const initialProducts = localStorage.getItem('products')

    if (initialProducts) {
      setValue(JSON.parse(initialProducts))
    }
  }, [])

  return { fuse } as const
}
