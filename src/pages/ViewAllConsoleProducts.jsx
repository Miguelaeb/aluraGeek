import React, { useState, useEffect } from "react";
import { consoleData } from "../data/consoleData";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ViewAllConsoleProducts() {
    const [visibleconsoleData, setVisibleconsoleData] = useState(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1000) {
            return consoleData.length;
        } else if (screenWidth >= 375) {
            return 4;
        } else {
            return 2;
        }
    });

    function handleResize() {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1000) {
            setVisibleconsoleData(consoleData.length);
        } else if (screenWidth >= 375) {
            setVisibleconsoleData(4);
        } else {
            setVisibleconsoleData(2);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.scrollTo(0, 0);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <div>
                <div className=" m-4 lg:m-8">
                    <nav className=" xl:my-8 flex justify-between items-center xl:max-w-[80rem] mx-auto">
                        <div className=" flex justify-center items-center gap-8">
                            <Link to="/">
                                <img
                                    className="md:w-28 lg:w-36 cursor-pointer"
                                    src="images/alurageek__logo.svg"
                                    alt="aluraGeek logo"
                                />
                            </Link>

                            <div className="relative hidden md:block">
                                <input
                                    type="text"
                                    placeholder="¿Qué deseas buscar?"
                                    className=" font-Raleway font-normal text-sm w-72 xl:w-[24.7rem] text-seconday-gray border bg-searchBar-background rounded-full py-2 px-4 focus:outline-none focus:border-primary-blue"
                                />

                                <img
                                    className="absolute top-0 right-5 flex items-center justify-center h-full w-5"
                                    src="images/second__search__icon.svg"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="flex items-center space-x-5">
                            <img
                                className=" md:hidden"
                                src="images/search__icon.svg"
                                alt="search icon"
                            />
                        </div>
                    </nav>
                </div>

                <div className=" bg-searchBar-background p-4 md:py-8 lg:py-16">
                    <div className=" max-w-[80rem] mx-auto">
                        <h2 className="font-Raleway font-bold text-xl xl:text-4xl text-seconday-gray">
                            Consolas
                        </h2>
                    </div>

                    <div className=" w-full grid grid-cols-2 mt-4 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-[80rem] mx-auto">
                        {consoleData
                            .slice(0, visibleconsoleData)
                            .map((consoleData) => (
                                <div
                                    key={consoleData.id}
                                    className="startWarsData-card flex flex-col gap-2">
                                    <img
                                        className=" w-full"
                                        src={consoleData.image}
                                        alt={consoleData.name}
                                    />
                                    <h3 className=" font-Raleway font-medium text-sm text-seconday-gray">
                                        {consoleData.name}
                                    </h3>
                                    <p className=" font-Raleway font-bold text-base text-seconday-gray">
                                        {consoleData.price}
                                    </p>
                                    <Link to="/viewProduct">
                                        <button className=" font-Raleway font-bold text-sm text-left text-primary-blue">
                                            {" "}
                                            {consoleData.button}{" "}
                                        </button>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <Contact />
            <Footer />
        </div>
    );
}
