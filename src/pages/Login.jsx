import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SecondNavbar from "../components/SecondNavbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Login() {
    const [email] = useState("");
    const [password] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll up when the page load
    }, []);

    return (
        <div>
            <SecondNavbar />
            <div className=" flex flex-col justify-center items-center bg-searchBar-background">
                <h2 className=" font-Raleway font-bold text-base xl:text-lg text-seconday-gray mt-36">
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
                            className="block p-2.5 w-[17rem] xl:w-[26.4375rem] font-Raleway font-normal text-base text-seconday-gray border border-primary-blue outline-none"
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
                            className="block p-2.5 w-[17rem] xl:w-[26.4375rem] font-Raleway font-normal text-base text-seconday-gray border border-primary-blue outline-none"
                            type="password"
                            id="password"
                            value={password}
                            placeholder="Escriba su contraseña"
                            required
                        />
                    </div>

                    <div className=" flex justify-center mb-36">
                        <Link to="/admin">
                            <input
                                className="font-Raleway font-semibold text-sm xl:text-lg text-white bg-primary-blue w-32 py-3 px-4 lg:w-[17rem] xl:w-[26.4375rem] cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
                                type="submit"
                                value="Entrar"
                            />
                        </Link>
                    </div>
                </form>
            </div>
            <Contact />
            <Footer />
        </div>
    );
}
