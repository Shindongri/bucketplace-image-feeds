import { useState, useEffect } from "react"
import { fetchListAPI } from "../api"

import { IItem } from '../components/Card.spec'

const useFetch = (page: number) => {
  const [hasNext, setHasNext] = useState(true)
  const [items, setItems] = useState<IItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const callUrl = async () => {
      try {
        if (hasNext) {
          const { status, data } = await fetchListAPI(page)

          if (status === 200) {
            setHasNext(data.length > 0)
            setItems([...items, ...data])
          }
        }
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    }

    callUrl()
  }, [page])

  return { items, loading, error }
}

export default useFetch
