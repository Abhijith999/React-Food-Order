import {priceFormatter} from '../Utils/formatter.js'
import Button from './UI/Button.jsx';

function MealsItem({meals}){
    const {name, price, description, image} = meals;

    return(
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${image}`} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p className="meal-item-price">{priceFormatter.format(price)}</p>
                    <p className="meal-item-description">{description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button>Add to cart</Button>
                </p>
            </article>
        </li>
    )
}
export default MealsItem