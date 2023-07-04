import React, { useState } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Login() {
    const [email] = useState("");
    const [password] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
    };

    return (
        <div>
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
                        <img
                            className=" md:hidden"
                            src="images/search__icon.svg"
                            alt="search icon"
                        />
                    </div>
                </nav>
            </div>

            <div className=" flex flex-col justify-center items-center bg-searchBar-background">
                <h2 className=" font-Raleway font-bold text-base text-seconday-gray mt-36">
                    Inciciar Sesion
                </h2>
                <form
                    className=" flex flex-col gap-6 mt-6"
                    onSubmit={handleSubmit}>
                    <div className=" flex flex-col items-center">
                        <label className=" sr-only hidden" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="block p-2.5 w-[17rem] font-Raleway font-normal text-base text-seconday-gray border border-primary-blue outline-none"
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Escriba su correo electronico"
                            required
                        />
                    </div>

                    <div className=" flex flex-col items-center">
                        <label className=" sr-only hidden" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="block p-2.5 w-[17rem] font-Raleway font-normal text-base text-seconday-gray border border-primary-blue outline-none"
                            type="password"
                            id="password"
                            value={password}
                            placeholder="Escriba su contraseña"
                            required
                        />
                    </div>

                    <div className=" flex justify-center mb-36">
                        <input
                            className="font-Raleway font-semibold text-sm text-white bg-primary-blue w-32 py-3 px-4 lg:w-[17rem]"
                            type="submit"
                            value="Submit"
                        />
                    </div>
                </form>
            </div>
            <Contact />
            <Footer />
        </div>
    );
}
