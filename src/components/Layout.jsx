import React from "react";

const Layout = ({ children }) => {
    return (
        <>
            <div className="w-[90%] mx-[auto] rounded-tr-[30px] rounded-tl-[30px] rounded-br-[20px] rounded-bl-[20px]  bg-[white]">
                {children}
            </div>
        </>
    );
};

export default Layout;
