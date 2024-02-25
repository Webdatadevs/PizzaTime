import axios from "axios";
import { fetchedMeal } from "../slices/slice";

export async function getMeals(url, dispatch){
   await axios.get(url)
    .then((res)=>{
        // console.log(res.data)
        dispatch(fetchedMeal(res.data.meals))
    })
    .catch((err) => {
        console.log(err)
    })
}