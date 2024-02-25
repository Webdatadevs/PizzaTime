import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getMeals } from "../../axios/getMeals";

const Content = () => {
    const mealSate = useSelector((state) => state.meals);
    const dispatch = useDispatch();
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";

    useEffect(() => {
        getMeals(url, dispatch);
    }, []);
    return (
        <>
            <div className="w-[80%] mx-[auto] p-[10px]">
                <h2 className=" text-center font-bold text-[24px] mt-[20px]">
                    Recommended menu
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:grid-cols-1">
                    {
                        mealSate.map((element) =>(
                            <Card key={element.idMeal} element={element}/>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Content;
