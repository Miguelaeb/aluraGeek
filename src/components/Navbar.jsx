import React from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className=" m-4 lg:m-8">
            <nav className=" xl:my-8 flex justify-between items-center xl:max-w-[80rem] mx-auto">
                <div className=" flex justify-center items-center gap-8">
                    <img
                        className=" md:w-28 lg:w-36"
                        src="images/alurageek__logo.svg"
                        alt="aluraGeek logo"
                    />

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
                    <Link to='login'>
                    <button className="font-Raleway font-semibold text-sm text-primary-blue border border-solid border-primary-blue w-32 md:w-40 xl:w-48 py-3 px-4 hover:scale-110 transition duration-300 ease-in-out">
                        Login
                    </button>
                    </Link>
                    <img
                        className=" md:hidden"
                        src="images/search__icon.svg"
                        alt="search icon"
                    />
                </div>
            </nav>
        </div>
    );
}
