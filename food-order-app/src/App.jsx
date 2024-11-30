import { useState } from 'react'
import Header from './Components/Header.jsx'
import Meals from './Components/Meals.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Meals/>
    </>
  )
}

export default App
