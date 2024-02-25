import React from "react";
import { selectData } from "../../slices/slice";
import { useDispatch, useSelector } from "react-redux";

const Card = ({element}) => {
    const mealSate = useSelector((state) => state.meals)
    const basketData = useSelector((state) => state.basketData)

    const dispatch = useDispatch()
    return (
        <>
            <div className=" flex flex-col justify-between items-center mt-[30px] shadow-slate-300 shadow-md px-[10px] py-[10px] rounded-tr-[80px] rounded-tl-[80px] border-[3px]">
                <img className="rounded-full "  src={element.strMealThumb} alt="" />
                <h2 className="text-[18px] font-bold mt-[10px] ">{element.strMeal}</h2>
                <span className="text-[#237523] text-[18px] font-semibold ">20 $</span>
                <button 
                onClick={() =>{
                    dispatch(selectData(mealSate.find((item) => item.idMeal === element.idMeal)))
                }}
                className=" w-[100%] mt-[15px] flex justify-center items-center py-[10px] px-[15px] active:opacity-50 bg-[crimson] rounded-[10px] text-[#fff]">ADD TO CARD</button>
            </div>
        </>
    );
};

export default Card;
