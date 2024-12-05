// import {useState, useEffect} from "react"
import useHttp from "../Hooks/useHttp.js"
import MealsItem from "./MealsItem"
import Error from "./Error.jsx"

const requestConfig = {}

function Meals(){
    const {responseData:loadedMeals, isLoading, error} = useHttp('http://localhost:3000/meals',requestConfig,[])
    // const [loadedMeals, setLoadedMeals] = useState([])

    // useEffect(()=>{
    //     async function fetchMeals(){
    //         const meals = await fetch('http://localhost:3000/meals')
    //         const mealsData = await meals.json()
    //         setLoadedMeals(mealsData); 
    //     }
    //     fetchMeals()
    // },[])
    if(isLoading){
        return <p className="center">Fetching Meals...</p>
    }
    if(error){
        return <Error title='Failed to fetch the meals' message={error}/>
    }
    return(
        <ul id="meals">
            {loadedMeals.map((meal)=>{
                return <MealsItem key={meal.id} meals={meal}/>
            })}
        </ul>
    )
}
export default Meals