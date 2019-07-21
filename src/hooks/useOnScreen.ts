import React, { useState, useEffect } from 'react'

const useOnScreen = (ref: any, rootMargin = '0px') => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const options = {
    rootMargin,
    threshold: 0.6
  }

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
      
    }, options)

    if (ref.current) {
      io.observe(ref.current)
    }

    return () => io.unobserve(ref.current)
  }, [])

  return isIntersecting
}

export default useOnScreen