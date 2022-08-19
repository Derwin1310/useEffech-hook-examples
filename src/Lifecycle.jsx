import { useEffect, useState } from "react"

export const Lifecycle = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  useEffect(() => {
    console.log('useEffect no dependency')
  })

  useEffect(() => {
    console.log('useEffect []')
  }, [])

  useEffect(() => {
    console.log('useEffect counter1')
  }, [counter1])

  useEffect(() => {
    console.log('useEffect counter2')
  }, [counter2])

  useEffect(() => {
    console.log('useEffect [counter1, counter2]')
  }, [counter1, counter2])

  return (
    <div>
      <h2>Clicks c1: {counter1}</h2>
      <h2>Clicks c1: {counter2}</h2>

      <button onClick={() => setCounter1(counter1 + 1)}>
        Increment c1
      </button>

      <button onClick={() => setCounter2(counter2 + 1)}>
        Increment c2
      </button>
    </div>
  )
}
