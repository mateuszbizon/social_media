import { useEffect, useState } from 'react'

function useWidth() {
    const [width, setWidth] = useState(window.innerWidth)
    const isMobile = width < 768

    const handleResize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

  return {
    width,
    isMobile,
  }
}

export default useWidth