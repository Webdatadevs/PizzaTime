import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMeals } from '../axios/getMeals'
import { selectData } from '../slices/slice'

const Basket = () => {
    const basketData = useSelector((state) => state.basketData)

    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    const dispatch = useDispatch()
    useEffect(()=>{
        getMeals(url, dispatch)
    } ,[])
  return (
    <>
        <div className=" w-[80%] mx-[auto] mt-[20px] pb-[20px] grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:grid-cols-1">
        {
            basketData?.map((element) => (
                <div key={element.idMeal} className=" flex flex-col justify-between items-center mt-[30px] shadow-slate-300 shadow-md px-[10px] py-[10px] rounded-tr-[80px] rounded-tl-[80px] border-[3px]">
                    <img className="rounded-full "  src={element.strMealThumb} alt="" />
                    <h2 className="text-[18px] font-bold mt-[10px] ">{element.strMeal}</h2>
                    <span className="text-[#237523] text-[18px] font-semibold ">20 $</span>
                    <button 
                    className=" w-[100%] mt-[15px] flex justify-center items-center py-[10px] px-[15px] bg-[crimson] rounded-[10px] text-[#fff]">BUY</button>
                </div>
            ))
        }
        </div>
    </>
  )
}

export default Basket