import Modal from "./UI/Modal.jsx"
import CartContext from "../Store/CartContext.jsx"
import UserCartProgressContext from "../Store/UserCartProgressContext.jsx";
import { priceFormatter } from "../Utils/formatter.js";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import { useContext } from "react";
import useHttp from "../Hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    }
}

function Checkout(){

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserCartProgressContext)
    const TotalCartPrice = cartCtx.item.reduce((totalPrice, item)=>{
        return totalPrice + item.price*item.quantity;
    }, 0)

    const {responseData, isLoading:isSending, error, sendRequest, clearData} = useHttp('http://localhost:3000/orders', requestConfig,)

    function handleClose(){
        userProgressCtx.hideCheckout()
    }

    function handleClearCart(){
        userProgressCtx.hideCheckout()
        cartCtx.clearCart()
        clearData()
    }

    function handleFormSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target)
        const customerData = Object.fromEntries(formData.entries());

        sendRequest(JSON.stringify({
            order: {
              items: cartCtx.item,
              customer: customerData,
            },
        }))
    }

    let actions = <>
        <Button type='button' textOnly onClick={handleClose}>Close</Button>
        <Button>Submit Order</Button>
    </>

    if(isSending){
        actions = <span>...Accepting order</span>
    }

    if(responseData && !error){
        return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
            <h2>Success!</h2>
            <p>Your order submitted successfully!</p>
            <p>We will deliver shortly</p>
            <p className="modal-actions">
                <Button onClick={handleClearCart}>Okay</Button>
            </p>
        </Modal>
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

                {error && <Error title='Something went wrong' message={error}/>}

                <div className="modal-actions">
                    {actions}
                </div>
            </form>
        </Modal>
    )
}
export default Checkout