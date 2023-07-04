import React from "react";

export default function Contact() {
    return (
        <section className="w-full bg-section-background p-4 mt-4 md:px-8 md:mt-8 lg:mt-16 md:py-8">
            <div className="lg:max-w-[80rem] mx-auto flex flex-col justify-center md:flex-row">
                <div className="flex flex-col w-full md:w-1/2 xl:w-full items-center gap-4 xl:gap-40 md:items-start xl:flex-row">
                    <img
                        className="justify-center"
                        src="images/contactLogo.svg"
                        alt="contact logo"
                    />
                    <div className="flex flex-col gap-4 md:w-64 md:items-start">
                        <a href="#"  className="font-Raleway font-medium text-base text-seconday-gray">
                            Quiénes Somos
                        </a>
                        <a href="#" className="font-Raleway font-medium text-base text-seconday-gray">
                            Política de privacidad
                        </a>
                        <a href="#" className="font-Raleway font-medium text-base text-seconday-gray">
                            Programa de fidelidad
                        </a>
                        <a href="#" className="font-Raleway font-medium text-base text-seconday-gray">
                            Nuestras tiendas
                        </a>
                        <a href="#" className="font-Raleway font-medium text-base text-seconday-gray">
                            Quiero ser franquiciado
                        </a>
                        <a href="#" className="font-Raleway font-medium text-base text-seconday-gray">
                            Anuncie aquí
                        </a>
                    </div>
                </div>

                <form className="flex flex-col gap-4 w-full">
                    <h3 className="font-Raleway font-bold text-base text-seconday-gray">
                        Hable con nosotros
                    </h3>
                    <div>
                        <label className="sr-only hidden">Name:</label>
                        <input
                            className="block p-2.5 w-full font-Raleway font-normal text-base text-seconday-gray border border-primary-blue outline-none"
                            type="text"
                            id="name"
                            placeholder="Nombre"
                            required
                        />
                    </div>

                    <div>
                        <label className="sr-only hidden">
                            Escriba su mensaje
                        </label>
                        <textarea
                            className="block p-2.5 w-full h-[150px] md:h-[70px] font-Raleway font-normal text-base text-seconday-gray resize-none border border-primary-blue outline-none"
                            id="message"
                            placeholder="Escriba su mensaje"
                            required></textarea>
                    </div>

                    <button
                        className="font-Raleway font-semibold text-sm bg-primary-blue text-white w-32 py-3 px-4 hover:scale-110 transition duration-300 ease-in-out"
                        type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
