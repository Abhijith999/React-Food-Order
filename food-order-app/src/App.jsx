import { useState } from 'react'
import Cart from './Components/Cart.jsx'
import Header from './Components/Header.jsx'
import Meals from './Components/Meals.jsx'
import {CartContextProvider} from './Store/CartContext.jsx'
import {UserCartProgressProvider} from './Store/UserCartProgressContext.jsx'

function App() {

  return (
    <UserCartProgressProvider>
      <CartContextProvider>
        <Header/>
        <Meals/>x
        <Cart/>
      </CartContextProvider>
    </UserCartProgressProvider>
  )
}

export default App
