import {useState, useEffect} from "react"
import MealsItem from "./MealsItem"

function Meals(){
    const [loadedMeals, setLoadedMeals] = useState([])

    useEffect(()=>{
        async function fetchMeals(){
            const meals = await fetch('http://localhost:3000/meals')
            const mealsData = await meals.json()
            setLoadedMeals(mealsData); 
        }
        fetchMeals()
    },[])
    return(
        <ul id="meals">
            {loadedMeals.map((meal)=>{
                return <MealsItem key={meal.id} meals={meal}/>
            })}
        </ul>
    )
}
export default Meals