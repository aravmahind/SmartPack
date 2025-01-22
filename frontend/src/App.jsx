import { useState } from 'react'

import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* <div className="absolute top-60 right-10 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl ">
      </div> */}
    </>
  )
}

export default App
