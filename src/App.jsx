import { useState } from 'react'

import './reset.css'

function App() {
  const [count, setCount] = useState("app")

  return (
    <>
        <h1>{count}</h1>
    </>
  )
}

export default App
