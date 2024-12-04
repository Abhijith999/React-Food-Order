import { useState } from 'react'
import Cart from './Components/Cart.jsx'
import Checkout from './Components/Checkout.jsx'
import Header from './Components/Header.jsx'
import Meals from './Components/Meals.jsx'
import {CartContextProvider} from './Store/CartContext.jsx'
import {UserCartProgressProvider} from './Store/UserCartProgressContext.jsx'

function App() {

  return (
    <UserCartProgressProvider>
      <CartContextProvider>
        <Header/>
        <Meals/>
        <Cart/>
        <Checkout/>
      </CartContextProvider>
    </UserCartProgressProvider>
  )
}

export default App
