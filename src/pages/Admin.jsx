import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { startWarsData } from "../data/startWarsData";
import { consoleData } from "../data/consoleData";
import { variousData } from "../data/variousData";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Admin() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll up when the page load
    }, []);

    return (
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

            <div className=" bg-searchBar-background p-4 md:py-8">
                <div className="flex flex-col md:justify-between gap-4 mb-8 lg:px-8 xl:p-0 xl:max-w-[80rem] mx-auto md:flex-row">
                    <h2 className=" font-Raleway font-bold text-[1.375rem] text-seconday-gray flex items-center">
                        Todos los productos
                    </h2>
                    <Link to="/addProduct">
                        <button className="font-Raleway font-semibold text-sm bg-primary-blue text-white w-36 py-3 hover:scale-110 transition duration-300 ease-in-out">
                            Agregar producto
                        </button>
                    </Link>
                </div>

                <div className="flex flex-col lg:px-8 xl:p-0 xl:max-w-[80rem] mx-auto">
                    <div className=" w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-y-8">
                        {startWarsData.map((startWarsData) => (
                            <div
                                key={startWarsData.id}
                                className=" relative startWarsData-card flex flex-col gap-2">
                                <img
                                    className=" w-full"
                                    src={startWarsData.image}
                                    alt={startWarsData.name}
                                />
                                <h3 className=" font-Raleway font-medium text-sm text-seconday-gray">
                                    {startWarsData.name}
                                </h3>
                                <p className=" font-Raleway font-bold text-base text-seconday-gray">
                                    {startWarsData.price}
                                </p>
                                {/* <button className=" font-Raleway font-bold text-sm text-left text-primary-blue">
                                    {" "}
                                    {startWarsData.button}{" "}
                                </button> */}

                                <div className="absolute right-4 top-4 flex gap-6">
                                    <img
                                        className=" cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                                        src="images/delete__icon.svg"
                                        alt=""
                                    />
                                    <img
                                        className=" cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                                        src="images/edit__icon.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        ))}

                        {consoleData.map((consoleData) => (
                            <div
                                key={consoleData.id}
                                className=" relative consoleData-card flex flex-col gap-2">
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
                                {/* <button className=" font-Raleway font-bold text-sm text-left text-primary-blue">
                                    {" "}
                                    {startWarsData.button}{" "}
                                </button> */}
                                <div className="absolute right-4 top-4 flex gap-6">
                                    <img
                                        className=" cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                                        src="images/delete__icon.svg"
                                        alt=""
                                    />
                                    <img
                                        className=" cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                                        src="images/edit__icon.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        ))}

                        {variousData.map((variousData) => (
                            <div
                                key={variousData.id}
                                className=" relative variousData-card flex flex-col gap-2">
                                <img
                                    className=" w-full"
                                    src={variousData.image}
                                    alt={variousData.name}
                                />
                                <h3 className=" font-Raleway font-medium text-sm text-seconday-gray">
                                    {variousData.name}
                                </h3>
                                <p className=" font-Raleway font-bold text-base text-seconday-gray">
                                    {variousData.price}
                                </p>
                                {/* <button className=" font-Raleway font-bold text-sm text-left text-primary-blue">
                                    {" "}
                                    {startWarsData.button}{" "}
                                </button> */}
                                <div className="absolute right-4 top-4 flex gap-6">
                                    <img
                                        className=" cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                                        src="images/delete__icon.svg"
                                        alt=""
                                    />
                                    <img
                                        className=" cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                                        src="images/edit__icon.svg"
                                        alt=""
                                    />
                                </div>
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
