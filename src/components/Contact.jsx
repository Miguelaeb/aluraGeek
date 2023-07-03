import React from "react";

export default function Contact() {
    return (
        <section className=" w-full bg-section-background flex flex-col justify-center md:flex-row gap-8 xl:gap-32 p-4 mt-4 md:mt-8 md:p-8">
            <div className=" flex flex-col items-center gap-4 xl:gap-40 md:items-start xl:flex-row">
                <img className=" justify-center" src="images/contactLogo.svg" alt="contact logo" />
                <div className=" flex flex-col gap-4 md:w-64 md:items-start">
                <button
                    className=" font-Raleway font-medium text-base text-seconday-gray">
                    Quines Somos
                </button>
                <button
                    className=" font-Raleway font-medium text-base text-seconday-gray">
                    Política de privacidad
                </button>
                <button
                    className=" font-Raleway font-medium text-base text-seconday-gray">
                    Programa de fidelidad
                </button>
                <button
                    className=" font-Raleway font-medium text-base text-seconday-gray">
                    Nuestras tiendas
                </button>
                <button
                    className=" font-Raleway font-medium text-base text-seconday-gray">
                    Quiero ser franquiciado
                </button>
                <button
                    className=" font-Raleway font-medium text-base text-seconday-gray">
                    Anúncie aquí
                </button>
                </div>
            </div>

            <form className="flex flex-col gap-4 w-full md:w-[434px] xl:w-[560px]">
                <h3 className=" font-Raleway font-bold text-base text-seconday-gray">
                    Hable con nosotros
                </h3>
                <div>
                    <label className="sr-only hidden">Name:</label>
                    <input
                        className=" block p-2.5 w-full font-Raleway font-normal text-base text-seconday-gray border border-primary-blue outline-none"
                        type="text"
                        id="name"
                        placeholder="Nombre"
                        required
                    />
                </div>

                <div>
                    <label className="sr-only hidden">Escriba su mensaje</label>
                    <textarea
                        className="block p-2.5 w-full h-[150px] md:h-[70px] font-Raleway font-normal text-base text-seconday-gray resize-none border border-primary-blue outline-none"
                        id="message"
                        placeholder="Escriba su mensaje"
                        required></textarea>
                </div>

                <button
                    className="font-Raleway font-semibold text-sm bg-primary-blue text-white w-32 py-3 px-4 hover:border hover:border-solid hover:border-primary-blue hover:bg-transparent hover:text-primary-blue transition-all duration-300"
                    type="submit">
                    Submit
                </button>
            </form>
        </section>
    );
}
