import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className=" bg-[url('/public/images/banner.webp')] bg-no-repeat bg-100% bg-cover bg-center bg-100% p-4 lg:p-8">
            <div className=" flex flex-col gap-2 md:gap-4 mt-20 md:mt-32 xl:mt-52 xl:max-w-[80rem] lg:mx-auto">
                <h1 className=" font-Raleway font-bold text-2xl md:text-[3.25rem] text-white">
                    Febrero Promocional
                </h1>
                <p className=" font-Raleway font-semibold text-sm md:text-[1.375rem] text-white">
                    Productos selecionados con 33% de descuento
                </p>
                <Link to="/viewAllConsoleProducts">
                    <button className=" font-Raleway font-semibold text-sm bg-primary-blue text-white w-32 py-3 px-4 hover:scale-110 transition duration-300 ease-in-out">
                        Ver Consolas
                    </button>
                </Link>
            </div>
        </header>
    );
}
