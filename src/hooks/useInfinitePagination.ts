import { useEffect } from 'react'

interface IProps {
  page: number;
  setPage: any;
  onlyScrapped: boolean;
}

const useInfinitePagination = ({ page, setPage, onlyScrapped }: IProps) => {
  useEffect(() => {
    const io = new IntersectionObserver(([entry], observer) => {
      if (entry.isIntersecting) {
        setPage(page + 1)
  
        observer.unobserve(entry.target)
      }
    }, { rootMargin: '0px', threshold: 1 })
    
    const lastEl = [...Array.from(document.querySelectorAll('.item'))].pop()

    if (lastEl && !onlyScrapped) {
      io.observe(lastEl)
    }
  
    return () => io.disconnect()
  })
}

export default useInfinitePagination