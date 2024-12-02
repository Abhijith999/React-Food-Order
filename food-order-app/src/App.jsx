import { useState } from 'react'
import Header from './Components/Header.jsx'
import Meals from './Components/Meals.jsx'
import {CartContextProvider} from './Store/CartContext.jsx'

function App() {

  return (
    <CartContextProvider>
      <Header/>
      <Meals/>
    </CartContextProvider>
  )
}

export default App
