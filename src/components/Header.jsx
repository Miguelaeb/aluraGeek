import React from "react";

export default function Header() {
    return(
        <header className=" bg-[url('/public/images/header__background.svg')] bg-no-repeat bg-100% bg-cover bg-center bg-100% p-4 xl:p-8 md:bg-[url('/public/images/header__tablet__background.svg')]">
            <div className=" flex flex-col gap-2 md:gap-4 mt-20 md:mt-32 xl:mt-52 xl:max-w-[80rem] 2xl:max-w-[100rem] lg:mx-auto">
            <h1 className=" font-Raleway font-bold text-2xl md:text-[3.25rem] text-white">Febrero Promocional</h1>
            <p className=" font-Raleway font-semibold text-sm md:text-[1.375rem] text-white">Productos selecionados con 33% de descuento</p>
            <button className=" font-Raleway font-semibold text-sm bg-primary-blue text-white w-32 py-3 px-4 hover:border hover:border-solid hover:border-primary-blue hover:bg-transparent hover:text-primary-blue transition-all duration-300">Ver Consola</button>
            </div>
        </header>
    )
}