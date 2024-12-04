import Button from "./UI/Button.jsx";
function CartItems({item, onIncrease, onDecrease}){
    const {name, price, quantity} = item
    return(
        <li className="cart-item">
            <p>{name} - {quantity} x {price}</p>
            <p className="cart-item-actions">
                <button onClick={onIncrease}>+</button>
                <span>{quantity}</span>
                <button onClick={onDecrease}>-</button>
            </p>
        </li>
    )
}
export default CartItems;