import { SlBasket } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="w-[90%] mx-[auto] flex justify-between items-center p-[10px] pt-[20px]">
                <NavLink to={"/"}>
                    <h1>
                        <span className="text-[#4a2017] font-bold ">Pizza</span>
                        <span className="text-[#222] font-bold">Time</span>
                    </h1>
                </NavLink>
                <ul className="flex items-center gap-[20px]">
                    <li>
                        <NavLink className="text-[14px]">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-[14px]">Menu</NavLink>
                    </li>
                    <li>
                        <NavLink className="text-[14px]">Promo</NavLink>
                    </li>
                    <li>
                        <BiSearch />
                    </li>
                    <li>
                        <NavLink to={"/basket"}>
                            <SlBasket className="text-[16px]" />
                        </NavLink>
                    </li>
                    <li>
                        <button
                            className="flex justify-center text-[14px] items-center 
                                       py-[5px] px-[10px] rounded-[10px] bg-[crimson] text-[#fff]"
                        >
                            SIGN IN
                        </button>
                    </li>
                </ul>
            </header>
        </>
    );
};

export default Header;
