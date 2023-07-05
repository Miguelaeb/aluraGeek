import React, { useState } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function AddProduct() {
    const [imageUrl, setImageUrl] = useState("");
    const [categoria, setCategoria] = useState("");
    const [nombreProducto, setNombreProducto] = useState("");
    const [precioProducto, setPrecioProducto] = useState("");
    const [descripcionProducto, setDescripcionProducto] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del producto al backend del ecommerce
        // Puedes acceder a los valores de las variables (imageUrl, categoria, nombreProducto, precioProducto, descripcionProducto) y enviarlos como una solicitud de API, por ejemplo.
        // También puedes realizar validaciones adicionales antes de enviar los datos.

        // Una vez que se haya enviado exitosamente, puedes reiniciar los valores del formulario si es necesario:
        setImageUrl("");
        setCategoria("");
        setNombreProducto("");
        setPrecioProducto("");
        setDescripcionProducto("");
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
                        <button className="font-Raleway font-semibold text-sm text-primary-blue border border-solid border-primary-blue w-[11rem] md:w-[12rem] xl:w-48 py-3 px-4 hover:scale-110 transition duration-300 ease-in-out">
                            Menú Administrador
                        </button>

                        <img
                            className=" md:hidden"
                            src="images/search__icon.svg"
                            alt="search icon"
                        />
                    </div>
                </nav>
            </div>

            <div className=" bg-searchBar-background p-4 md:py-8 md:px-8">
                <div className=" max-w-3xl mx-auto">
                    <h2 className=" font-Raleway font-bold text-[1.375rem] text-seconday-gray">
                        Agregar nuevo producto
                    </h2>

                    <form
                        className=" flex flex-col gap-4 mt-4 "
                        onSubmit={handleSubmit}>
                        <div>
                            <label
                                className=" sr-only hidden"
                                htmlFor="imageUrl">
                                URL de la imagen:
                            </label>
                            <input
                                className="block p-2.5 w-full font-Raleway font-normal text-base text-seconday-gray border border-primary-blue outline-none"
                                type="text"
                                id="imageUrl"
                                placeholder="URL de la imagen"
                                value={imageUrl}
                                onChange={(event) =>
                                    setImageUrl(event.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label
                                className=" sr-only hidden"
                                htmlFor="categoria">
                                Categoría:
                            </label>
                            <input
                                className="block p-2.5 w-full font-Raleway font-normal text-base text-seconday-gray border border-primary-blue outline-none"
                                type="text"
                                id="categoria"
                                placeholder="Categoria"
                                value={categoria}
                                onChange={(event) =>
                                    setCategoria(event.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label
                                className=" sr-only hidden"
                                htmlFor="nombreProducto">
                                Nombre del producto:
                            </label>
                            <input
                                className="block p-2.5 w-full font-Raleway font-normal text-base text-seconday-gray border border-primary-blue outline-none"
                                type="text"
                                id="nombreProducto"
                                placeholder="Nombre del producto"
                                value={nombreProducto}
                                onChange={(event) =>
                                    setNombreProducto(event.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label
                                className=" sr-only hidden"
                                htmlFor="precioProducto">
                                Precio del producto:
                            </label>
                            <input
                                className="block p-2.5 w-full font-Raleway font-normal text-base text-seconday-gray border border-primary-blue outline-none"
                                type="text"
                                id="precioProducto"
                                placeholder="Precio del producto"
                                value={precioProducto}
                                onChange={(event) =>
                                    setPrecioProducto(event.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label
                                className=" sr-only hidden"
                                htmlFor="descripcionProducto">
                                Descripción del producto:
                            </label>
                            <textarea
                                className="block p-2.5 w-full h-[150px] md:h-[70px] lg:h-[150px] font-Raleway font-normal text-base text-seconday-gray resize-none border border-primary-blue outline-none"
                                id="descripcionProducto"
                                placeholder="Descripción del producto"
                                value={descripcionProducto}
                                onChange={(event) =>
                                    setDescripcionProducto(event.target.value)
                                }
                            />
                        </div>

                        <div className=" flex justify-center">
                            <button
                                className="font-Raleway font-semibold text-sm bg-primary-blue text-white w-full py-3 px-4 hover:scale-110 transition duration-300 ease-in-out"
                                type="submit">
                                Agregar producto
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Contact />
            <Footer />
        </div>
    );
}