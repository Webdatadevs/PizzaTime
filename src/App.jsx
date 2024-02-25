import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import Content from "./components/Content/Content";
import { Route, Routes } from "react-router-dom";
import Basket from "./components/Basket";


const App = () => {
    return (
        <>
            <div className="bg-[bisque] w-[100%] min-h-[100vh] pt-[20px] pb-[10px]">
                <Layout>
                    <Header />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Banner />
                                    <Content />
                                </>
                            }
                        />
                        <Route path="/basket" element={<Basket />} />
                    </Routes>
                </Layout>
            </div>
        </>
    );
};

export default App;
