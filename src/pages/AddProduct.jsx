import React, { useState } from "react";
import SecondNavbar from "../components/SecondNavbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function AddProduct() {
    // eslint-disable-next-line
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [categoria, setCategoria] = useState("");
    const [nombreProducto, setNombreProducto] = useState("");
    const [precioProducto, setPrecioProducto] = useState("");
    const [descripcionProducto, setDescripcionProducto] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImageFile(file);
        const imageURL = URL.createObjectURL(file);
        setImageUrl(imageURL);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setImageFile(null);
        setImageUrl("");
        setCategoria("");
        setNombreProducto("");
        setPrecioProducto("");
        setDescripcionProducto("");
    };

    return (
        <div>
            <SecondNavbar />
            <div className="bg-searchBar-background p-4 md:py-8 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-Raleway font-bold text-[1.375rem] text-seconday-gray">
                        Agregar nuevo producto
                    </h2>

                    <form
                        className="flex flex-col gap-4 mt-4"
                        onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <label
                                    htmlFor="imageFile"
                                    className=" sr-only hidden">
                                    Imagen:
                                </label>
                                <input
                                    className=" block p-2.5 w-full font-Raleway font-normal text-base text-seconday-gray border border-primary-blue outline-none bg-white"
                                    type="file"
                                    id="imageFile"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div>
                                <img
                                    src={imageUrl}
                                    alt="Vista previa de la imagen"
                                    className="mt-2 max-w-full h-auto"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                className="sr-only hidden"
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
                                className="sr-only hidden"
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
                                className="sr-only hidden"
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
                                className="sr-only hidden"
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
