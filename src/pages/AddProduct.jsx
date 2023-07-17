import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function AddProduct() {
    const URL = "https://alura-geek-gamma-ivory.vercel.app/products";
    const [imageUrl, setImageUrl] = useState("");
    const [categoria, setCategoria] = useState("");
    const [nombreProducto, setNombreProducto] = useState("");
    const [precioProducto, setPrecioProducto] = useState("");
    const [descripcionProducto, setDescripcionProducto] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        const newProduct = {
            id: uuidv4(), // Genera un ID único
            image: imageUrl,
            category: categoria,
            name: nombreProducto,
            price: precioProducto,
            description: descripcionProducto,
        };

        axios
            .post(URL, newProduct)
            .then((response) => {
                console.log("Producto agregado con éxito:", response.data);
                // Lógica adicional después de agregar el producto
            })
            .catch((error) => {
                console.error("Error al agregar el producto:", error);
                // Lógica adicional en caso de error
            });

        setNombreProducto("");
        setPrecioProducto("");
        setImageUrl("");
        setCategoria("");
        setDescripcionProducto("");
        setErrors({});
    };

    const validateForm = () => {
        let hasErrors = false;
        const newErrors = {};

        if (!imageUrl) {
            newErrors.imageUrl = "Debes proporcionar una URL de imagen";
            hasErrors = true;
        }

        if (
            !categoria ||
            !["StarWars", "console", "various"].includes(categoria)
        ) {
            newErrors.categoria = "Debes seleccionar una categoría válida";
            hasErrors = true;
        }

        if (!nombreProducto) {
            newErrors.nombreProducto =
                "Debes proporcionar un nombre de producto";
            hasErrors = true;
        }

        if (!precioProducto) {
            newErrors.precioProducto =
                "Debes proporcionar un precio de producto";
            hasErrors = true;
        }

        if (!descripcionProducto) {
            newErrors.descripcionProducto =
                "Debes proporcionar una descripción de producto";
            hasErrors = true;
        }

        setErrors(newErrors);

        return !hasErrors;
    };

    return (
        <div>
            <div className=" m-4 lg:m-8">
                <nav className="xl:my-8 flex justify-between items-center xl:max-w-[80rem] mx-auto">
                    <div className="flex justify-center items-center gap-8">
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
                                className="font-Raleway font-normal text-sm w-72 xl:w-[24.7rem] text-seconday-gray border bg-searchBar-background rounded-full py-2 px-4 focus:outline-none focus:border-primary-blue"
                            />

                            <img
                                className="absolute top-0 right-5 flex items-center justify-center h-full w-5"
                                src="images/second__search__icon.svg"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-5">
                        <Link to="/admin">
                            <button className="font-Raleway font-semibold text-sm text-primary-blue border border-solid border-primary-blue w-42 md:w-40 xl:w-48 py-3 px-4 hover:scale-110 transition duration-300 ease-in-out">
                                Menú Administrador
                            </button>
                        </Link>
                        <img
                            className="md:hidden"
                            src="images/search__icon.svg"
                            alt="search icon"
                        />
                    </div>
                </nav>
            </div>
            <div className="bg-searchBar-background p-4 md:py-8 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-Raleway font-bold text-[1.375rem] text-seconday-gray">
                        Agregar nuevo producto
                    </h2>

                    <form
                        className="flex flex-col gap-4 mt-4"
                        onSubmit={handleSubmit}>
                        <div className=" w-full md:w-1/2 h-[15rem] rounded-lg border-2 border-dashed border-primary-blue bg-white">
                            <img
                                src={imageUrl}
                                alt="Vista previa de la imagen"
                                className=" w-full h-full"
                            />
                        </div>

                        <div>
                            <label className=" hidden" htmlFor="imageUrl">URL de la imagen:</label>
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
                            {errors.imageUrl && (
                                <p className="font-Raleway font-medium text-red-500">
                                    {errors.imageUrl}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className=" hidden" htmlFor="categoria">Categoría:</label>
                            <input
                                className="block p-2.5 w-full font-Raleway font-normal text-base text-seconday-gray border border-primary-blue outline-none"
                                type="text"
                                id="categoria"
                                placeholder="Categoría"
                                value={categoria}
                                onChange={(event) =>
                                    setCategoria(event.target.value)
                                }
                            />
                            {errors.categoria && (
                                <p className="font-Raleway font-medium text-red-500">
                                    {errors.categoria}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className=" hidden" htmlFor="nombreProducto">
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
                            {errors.nombreProducto && (
                                <p className="font-Raleway font-medium text-red-500">
                                    {errors.nombreProducto}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className=" hidden" htmlFor="precioProducto">
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
                            {errors.precioProducto && (
                                <p className="font-Raleway font-medium text-red-500">
                                    {errors.precioProducto}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className=" hidden" htmlFor="descripcionProducto">
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
                            {errors.descripcionProducto && (
                                <p className="font-Raleway font-medium text-red-500">
                                    {errors.descripcionProducto}
                                </p>
                            )}
                        </div>

                        <div className="flex justify-center">
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
