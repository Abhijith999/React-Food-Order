import { createContext, useReducer } from "react";

const CartContext = createContext({
    // items:[],
    // addItem: (item)=>{},
    // removeItem: (id)=>{}
})

function cartReducer(state, action){
    if(action.type === 'ADD_ITEM'){
        const existingItemIndex = state.items.findIndex((item)=> item.id === action.item.id)

        const previousItems = [...state.items]

        if(existingItemIndex > -1){
           const prevoiusObjectItem = {
            ...state.items[existingItemIndex],
            quantity: state.items[existingItemIndex].quantity + 1,
           } 
           previousItems[existingItemIndex] = prevoiusObjectItem;
        }else{
            previousItems.push({...action.item, quantity:1})
        }
        return {...state, items:previousItems}
    }
    else if(action.type === 'REMOVE_ITEM'){
        const existingItemIndex = state.items.findIndex((item)=> item.id === action.id)

        const previousItems = [...state.items]
        const existingItem = state.items[existingItemIndex]

        if(existingItem.quantity === 1){
            previousItems.splice(existingItemIndex, 1)
        }
        else{
            const updatedItem = {...existingItem, quantity:existingItem.quantity - 1}
            previousItems[existingItemIndex] = updatedItem
        }
        return {...state, items:previousItems}
    }
    return state;
}

export const CartContextProvider = ({children})=>{
const[currentCart, dispatcher] = useReducer(cartReducer, {items:[]});

function addItem(item){
    dispatcher({type:'ADD_ITEM', item})
}

function removeItem(id){
    dispatcher({type:'REMOVE_ITEM', id})
}

const cartContext = {
    item:currentCart.items,
    addItem,
    removeItem,
}
console.log(cartContext)

    return(
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    )
}

export default CartContext;