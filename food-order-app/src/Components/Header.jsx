import foodLogo from '../assets/logo.jpg'
import Button from './UI/Button';
import {useContext} from 'react'
import CartContext from '../Store/CartContext';

function Header(){

    const cartCtx = useContext(CartContext)
    const cartItemArray = cartCtx.item;
    const cartQuantity = cartItemArray.reduce((acc, item)=>{return acc + item.quantity }, 0)
    return(
        <header id="main-header">
            <div id="title">
                <img src={foodLogo} alt="logo" />
                <h1>ByteFood</h1>
            </div>
            <nav>
                <Button textOnly >Cart {`(${cartQuantity})`}</Button>
            </nav>
        </header>
    )
}
export default Header;