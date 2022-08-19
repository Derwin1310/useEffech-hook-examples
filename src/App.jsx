import { useState } from "react"
import { FetchCard } from "./FetchCard"
import { Lifecycle } from "./Lifecycle"
import { ResizeApp } from "./ResizeApp"

function App() {

  const [show, setShow] = useState()

  return (
    <>
      <button onClick={() => setShow(!show)}>
        Show / Hide
      </button>
      {/* <Lifecycle /> */}
      {/* <FetchCard /> */}
      {show && <ResizeApp />}
    </>
  )
}

export default App
