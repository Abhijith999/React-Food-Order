import { useContext } from 'react';
import {priceFormatter} from '../Utils/formatter.js'
import Button from './UI/Button.jsx';
import CartContext from '../Store/CartContext.jsx';

function MealsItem({meals}){
    const cartCtx = useContext(CartContext);

    const {name, price, description, image,} = meals;

    function handleAddMealToCart(){
        cartCtx.addItem(meals)
    }

    return(
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${image}`} alt="food image" />
                <div>
                    <h3>{name}</h3>
                    <p className="meal-item-price">{priceFormatter.format(price)}</p>
                    <p className="meal-item-description">{description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddMealToCart}>Add to cart</Button>
                </p>
            </article>
        </li>
    )
}
export default MealsItem