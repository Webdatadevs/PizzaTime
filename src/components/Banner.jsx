import React from "react";

const Banner = () => {
    return (
        <>
            <div className=" w-[80%] mx-[auto] flex mt-[50px]  items-center">
                <div className="flex flex-col items-start w-[50%] ">
                    <h2 className="text-[38px] font-bold ">Friday pizza!</h2>
                    <span className=" mt-[20px] text-[24px] font-bold ">Time to enjoy our delicious pizza.</span>
                    <button className=" mt-[20px] flex justify-center items-center rounded-[10px] py-[10px] px-[15px] text-[white] bg-[crimson]">ORDER NOW</button>
                </div>
                <div className="w-[50%]">
                    <img className="w-[100%] h-[100%] "  src="https://pngimg.com/d/pizza_PNG44002.png" alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;
