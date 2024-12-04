import Modal from "./UI/Modal.jsx";
import CartContext from "../Store/CartContext.jsx";
import {useContext} from 'react'
import {priceFormatter} from '../Utils/formatter.js'
import UserCartProgressContext from '../Store/UserCartProgressContext.jsx'
import Button from "./UI/Button.jsx";
import CartItems from "./CartItems.jsx";

function Cart(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserCartProgressContext)
    const TotalCartPrice = cartCtx.item.reduce((totalPrice, item)=>{
        return totalPrice + item.price*item.quantity;
    }, 0)

    function closeCart(){
        userProgressCtx.hideCart()
    }
    function handleGoToCheckout(){
        userProgressCtx.showCheckout()
    }

    return(
        <Modal className="cart" open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart'?closeCart:null}>
            <h1>Your Cart</h1>
            <ul>
                {cartCtx.item.map((item)=>{
                    return <CartItems key={item.id} item={item} onIncrease={()=>cartCtx.addItem(item)} onDecrease={()=>cartCtx.removeItem(item.id)}/>
                })}
            </ul>
            <p className="cart-total">Total Price - {priceFormatter.format(TotalCartPrice)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={closeCart}>Close</Button>
                {cartCtx.item.length > 0 ?<Button onClick={handleGoToCheckout}>Go to checkout</Button>:null}
            </p>
        </Modal>
    )
}
export default Cart;