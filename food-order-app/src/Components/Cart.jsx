import Modal from "./UI/Modal.jsx";
import CartContext from "../Store/CartContext.jsx";
import {useContext} from 'react'
import {priceFormatter} from '../Utils/formatter.js'
import UserCartProgressContext from '../Store/UserCartProgressContext.jsx'
import Button from "./UI/Button.jsx";

function Cart(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserCartProgressContext)
    const TotalCartPrice = cartCtx.item.reduce((totalPrice, item)=>{
        return totalPrice + item.price*item.quantity;
    }, 0)

    function closeCart(){
        userProgressCtx.hideCart()
    }

    return(
        <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
            <h1>Your Cart</h1>
            <ul>
                {cartCtx.item.map((item)=>{
                    return <li key={item.id}>{item.name} - {item.price}</li>
                })}
            </ul>
            <p className="cart-total">Total Price - {priceFormatter.format(TotalCartPrice)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={closeCart}>Close</Button>
                <Button>Go to checkout</Button>
            </p>
        </Modal>
    )
}
export default Cart;