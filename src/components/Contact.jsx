import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { id, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [id]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);

            // Clear form inputs
            setFormData({
                name: "",
                message: "",
            });
        }
    }

    function validateForm() {
        const newErrors = {};

        // Name validation: allow only letters and spaces
        const namePattern = /^[A-Za-z\s]+$/;
        if (!formData.name.match(namePattern)) {
            newErrors.name = "Formato de nombre invalido";
        }

        // Message validation: at least 5 characters
        if (formData.message.length < 5) {
            newErrors.message = "El mensaje de tener al menos 5 caracteres";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    return (
        <section className="w-full bg-section-background px-4 py-8 md:py-16">
            <div className="lg:max-w-[80rem] mx-auto flex flex-col justify-center gap-8 md:flex-row">
                <div className="flex flex-col w-full md:w-1/2 xl:w-full items-center gap-4 xl:gap-40 md:items-start xl:flex-row">
                    <Link to="/">
                        <img
                            className="md:w-28 lg:w-36 cursor-pointer"
                            src="images/alurageek__logo.svg"
                            alt="aluraGeek logo"
                        />
                    </Link>
                    <div className="flex flex-col gap-4 md:w-64 md:items-start">
                        <Link className="font-Raleway font-medium text-base text-seconday-gray hover:underline">
                            Quiénes Somos
                        </Link>
                        <Link className="font-Raleway font-medium text-base text-seconday-gray hover:underline">
                            Política de privacidad
                        </Link>
                        <Link className="font-Raleway font-medium text-base text-seconday-gray hover:underline">
                            Programa de fidelidad
                        </Link>
                        <Link className="font-Raleway font-medium text-base text-seconday-gray hover:underline">
                            Nuestras tiendas
                        </Link>
                        <Link className="font-Raleway font-medium text-base text-seconday-gray hover:underline">
                            Quiero ser franquiciado
                        </Link>
                        <Link className="font-Raleway font-medium text-base text-seconday-gray hover:underline">
                            Anuncie aquí
                        </Link>
                    </div>
                </div>

                <form
                    className="flex flex-col gap-4 w-full"
                    onSubmit={handleSubmit}>
                    <h3 className="font-Raleway font-bold text-base text-seconday-gray">
                        Hable con nosotros
                    </h3>
                    <div>
                        <label className="sr-only hidden">Name:</label>
                        <input
                            className={`block p-2.5 w-full font-Raleway font-normal text-base text-seconday-gray border ${
                                errors.name
                                    ? "border-red-500"
                                    : "border-primary-blue"
                            } outline-none`}
                            type="text"
                            id="name"
                            placeholder="Nombre"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="sr-only hidden">
                            Escriba su mensaje
                        </label>
                        <textarea
                            className={`block p-2.5 w-full h-[150px] md:h-[70px] font-Raleway font-normal text-base text-seconday-gray resize-none border ${
                                errors.message
                                    ? "border-red-500"
                                    : "border-primary-blue"
                            } outline-none`}
                            id="message"
                            placeholder="Escriba su mensaje"
                            value={formData.message}
                            onChange={handleChange}></textarea>
                        {errors.message && (
                            <p className="text-red-500 text-sm">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    <button
                        className="font-Raleway font-semibold text-sm bg-primary-blue text-white w-36 py-3 px-4 hover:scale-110 transition duration-300 ease-in-out"
                        type="submit">
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </section>
    );
}
