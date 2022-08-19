import { useState, useEffect } from 'react'

export const ResizeApp = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const isMobile = windowWidth < 768

  const handlerWidth = () => setWindowWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handlerWidth)

    return () => {
      window.removeEventListener('resize', handlerWidth)
      console.log('component unmount')
    }
  }, [])

  return (
    <div>
      <h1>{windowWidth}</h1>
      {
        isMobile
        ? <h2>Show only mobile device</h2>
        : <h2>Show only desktop device</h2>
      }
    </div>
  )
}
