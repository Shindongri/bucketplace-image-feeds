import React, { useState } from "react"

const useLocalStorage = (key: number, defaultValue: boolean) => {
  const [storedValue, setStoreValue] = useState(() => {
    try {
      const scrapped = localStorage.getItem(String(key))

      return scrapped ? JSON.parse(scrapped) : defaultValue
    } catch (e) {
      console.error(e)

      return defaultValue
    }
  })

  const setValue = (value: string) => {
    try {      
      setStoreValue(value)

      localStorage.setItem(String(key), JSON.stringify(value))
    } catch (e) {
      console.error(e)      
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
