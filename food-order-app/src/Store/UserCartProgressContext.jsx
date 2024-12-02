import { useState } from "react";
import { createContext } from "react";

const UserCartProgressContext = createContext({
})

export const UserCartProgressProvider = ({children})=>{
    const [userProgress, setUserProgress] = useState('')

    const showCart = ()=>{
        setUserProgress('cart')
    }
    const hideCart = ()=>{
        setUserProgress('')
    }
    const showCheckout = ()=>{
        setUserProgress('checkout')
    }
    const hideCheckout = ()=>{
        setUserProgress('')
    }
    const cartProgressCtx = {
     progress:userProgress,
     showCart,
     hideCart,
     showCheckout,
     hideCheckout,
    }
    return(
        <UserCartProgressContext.Provider value={cartProgressCtx}>{children}</UserCartProgressContext.Provider>
    )
}

export default UserCartProgressContext;