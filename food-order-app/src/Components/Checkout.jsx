import Modal from "./UI/Modal.jsx"
import CartContext from "../Store/CartContext.jsx"
import UserCartProgressContext from "../Store/UserCartProgressContext.jsx";
import { priceFormatter } from "../Utils/formatter.js";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import { useContext } from "react";

function Checkout(){

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserCartProgressContext)
    const TotalCartPrice = cartCtx.item.reduce((totalPrice, item)=>{
        return totalPrice + item.price*item.quantity;
    }, 0)

    function handleClose(){
        userProgressCtx.hideCheckout()
    }

    function handleFormSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target)
        const customerData = Object.fromEntries(formData.entries());

        fetch('http://localhost:3000/orders', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                order:{
                    items:cartCtx.item,
                    customer:customerData
                }
            })
        })
    }

    return(
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
            <form onSubmit={handleFormSubmit}>
                <h1>Checkout</h1>
                <p>Toatl Amount - {priceFormatter.format(TotalCartPrice)}</p>

                <Input label='Full Name' id='name' type='text'/>
                <Input label='Email' id='email' type='email'/>
                <Input label='Street' id='street' type='text'/>

                <div className="control-row">
                    <Input label='Postal Code' id='postal-code' type='text'/>
                    <Input label='City' id='city' type='text'/>
                </div>
                <div className="modal-actions">
                    <Button type='button' textOnly onClick={handleClose}>Close</Button>
                    <Button>Submit Order</Button>
                </div>
            </form>
        </Modal>
    )
}
export default Checkout