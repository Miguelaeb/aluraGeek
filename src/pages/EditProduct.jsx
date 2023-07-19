import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function EditProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [imageUrl, setImageUrl] = useState("");
    const [categoria, setCategoria] = useState("");
    const [nombreProducto, setNombreProducto] = useState("");
    const [precioProducto, setPrecioProducto] = useState("");
    const [descripcionProducto, setDescripcionProducto] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios
            .get(`https://alura-geek-gamma-ivory.vercel.app/products/${id}`)
            .then((response) => {
                setProduct(response.data);
                setImageUrl(response.data.image);
                setCategoria(response.data.category);
                setNombreProducto(response.data.name);
                setPrecioProducto(response.data.price);
                setDescripcionProducto(response.data.description);
            })
            .catch((error) => {
                console.error("Error fetching product data:", error);
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        const updatedProduct = {
            id: product.id,
            image: imageUrl,
            category: categoria,
            name: nombreProducto,
            price: precioProducto,
            description: descripcionProducto,
        };

        axios
            .put(
                `https://alura-geek-gamma-ivory.vercel.app/products/${id}`,
                updatedProduct
            )
            .then((response) => {
                console.log("Producto actualizado con éxito:", response.data);
                // Lógica adicional después de actualizar el producto
            })
            .catch((error) => {
                console.error("Error al actualizar el producto:", error);
                // Lógica adicional en caso de error
            });

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
                            <svg
                                width="176"
                                height="51"
                                viewBox="0 0 176 51"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M44.9556 34.0208L42.6849 18.0625C42.1016 13.9583 38.5809 10.9167 34.4353 10.9167H15.5614C11.4158 10.9167 7.89517 13.9583 7.31187 18.0625L5.04117 34.0208C4.58286 37.2292 7.06189 40.0833 10.2909 40.0833C11.7075 40.0833 13.0407 39.5208 14.0407 38.5208L18.7487 33.8333H31.248L35.9353 38.5208C36.9352 39.5208 38.2893 40.0833 39.685 40.0833C42.9349 40.0833 45.4139 37.2292 44.9556 34.0208ZM22.9152 23.4167H18.7487V27.5833H16.6655V23.4167H12.4991V21.3333H16.6655V17.1667H18.7487V21.3333H22.9152V23.4167ZM31.248 21.3333C30.1023 21.3333 29.1648 20.3958 29.1648 19.25C29.1648 18.1042 30.1023 17.1667 31.248 17.1667C32.3938 17.1667 33.3312 18.1042 33.3312 19.25C33.3312 20.3958 32.3938 21.3333 31.248 21.3333ZM35.4144 27.5833C34.2687 27.5833 33.3312 26.6458 33.3312 25.5C33.3312 24.3542 34.2687 23.4167 35.4144 23.4167C36.5602 23.4167 37.4977 24.3542 37.4977 25.5C37.4977 26.6458 36.5602 27.5833 35.4144 27.5833Z"
                                    fill="#2A7AE4"
                                />
                                <path
                                    d="M128.081 32.5C126.664 33.9167 125.014 34.625 123.131 34.625C121.964 34.625 120.864 34.3917 119.831 33.925C118.815 33.4584 117.923 32.8167 117.156 32C116.406 31.1834 115.806 30.225 115.356 29.125C114.923 28.0084 114.706 26.8084 114.706 25.525C114.706 24.3084 114.923 23.1667 115.356 22.1C115.806 21.0167 116.415 20.075 117.181 19.275C117.965 18.4584 118.881 17.8167 119.931 17.35C120.981 16.8667 122.123 16.625 123.356 16.625C125.023 16.625 126.447 16.975 127.631 17.675C128.831 18.375 129.731 19.3167 130.331 20.5L127.756 22.4C127.306 21.5167 126.672 20.8417 125.856 20.375C125.056 19.9084 124.181 19.675 123.231 19.675C122.481 19.675 121.789 19.8334 121.156 20.15C120.539 20.4667 120.006 20.9 119.556 21.45C119.123 22 118.781 22.6334 118.531 23.35C118.298 24.0667 118.181 24.825 118.181 25.625C118.181 26.4584 118.315 27.2417 118.581 27.975C118.848 28.6917 119.214 29.3167 119.681 29.85C120.148 30.3834 120.698 30.8084 121.331 31.125C121.981 31.425 122.681 31.575 123.431 31.575C125.148 31.575 126.697 30.7667 128.081 29.15V27.9H124.506V25.375H130.931V34.5H128.081V32.5Z"
                                    fill="#464646"
                                />
                                <path
                                    d="M139.62 34.75C138.57 34.75 137.62 34.575 136.77 34.225C135.92 33.8584 135.195 33.3667 134.596 32.75C133.996 32.1334 133.529 31.4167 133.196 30.6C132.879 29.7834 132.721 28.925 132.721 28.025C132.721 27.0917 132.879 26.2167 133.196 25.4C133.512 24.5667 133.971 23.8417 134.571 23.225C135.171 22.5917 135.895 22.0917 136.745 21.725C137.612 21.3584 138.579 21.175 139.645 21.175C140.712 21.175 141.662 21.3584 142.495 21.725C143.345 22.0917 144.062 22.5834 144.645 23.2C145.245 23.8167 145.695 24.5334 145.995 25.35C146.312 26.1667 146.47 27.0167 146.47 27.9C146.47 28.1167 146.462 28.325 146.445 28.525C146.445 28.725 146.428 28.8917 146.395 29.025H136.27C136.32 29.5417 136.445 30 136.645 30.4C136.845 30.8 137.104 31.1417 137.42 31.425C137.737 31.7084 138.095 31.925 138.495 32.075C138.895 32.225 139.312 32.3 139.745 32.3C140.412 32.3 141.037 32.1417 141.62 31.825C142.22 31.4917 142.628 31.0584 142.845 30.525L145.72 31.325C145.237 32.325 144.462 33.15 143.395 33.8C142.345 34.4334 141.087 34.75 139.62 34.75ZM143.02 26.85C142.937 25.8667 142.57 25.0834 141.92 24.5C141.287 23.9 140.512 23.6 139.595 23.6C139.145 23.6 138.72 23.6834 138.32 23.85C137.937 24 137.595 24.2167 137.295 24.5C136.995 24.7834 136.745 25.125 136.545 25.525C136.362 25.925 136.254 26.3667 136.22 26.85H143.02Z"
                                    fill="#464646"
                                />
                                <path
                                    d="M154.585 34.75C153.535 34.75 152.585 34.575 151.735 34.225C150.885 33.8584 150.16 33.3667 149.561 32.75C148.961 32.1334 148.494 31.4167 148.161 30.6C147.844 29.7834 147.686 28.925 147.686 28.025C147.686 27.0917 147.844 26.2167 148.161 25.4C148.477 24.5667 148.936 23.8417 149.536 23.225C150.135 22.5917 150.86 22.0917 151.71 21.725C152.577 21.3584 153.544 21.175 154.61 21.175C155.677 21.175 156.627 21.3584 157.46 21.725C158.31 22.0917 159.027 22.5834 159.61 23.2C160.21 23.8167 160.66 24.5334 160.96 25.35C161.277 26.1667 161.435 27.0167 161.435 27.9C161.435 28.1167 161.427 28.325 161.41 28.525C161.41 28.725 161.393 28.8917 161.36 29.025H151.235C151.285 29.5417 151.41 30 151.61 30.4C151.81 30.8 152.069 31.1417 152.385 31.425C152.702 31.7084 153.06 31.925 153.46 32.075C153.86 32.225 154.277 32.3 154.71 32.3C155.377 32.3 156.002 32.1417 156.585 31.825C157.185 31.4917 157.593 31.0584 157.81 30.525L160.685 31.325C160.202 32.325 159.427 33.15 158.36 33.8C157.31 34.4334 156.052 34.75 154.585 34.75ZM157.985 26.85C157.902 25.8667 157.535 25.0834 156.885 24.5C156.252 23.9 155.477 23.6 154.56 23.6C154.11 23.6 153.685 23.6834 153.285 23.85C152.902 24 152.56 24.2167 152.26 24.5C151.96 24.7834 151.71 25.125 151.51 25.525C151.327 25.925 151.219 26.3667 151.185 26.85H157.985Z"
                                    fill="#464646"
                                />
                                <path
                                    d="M172.425 34.5L168.625 28.825L166.825 30.6V34.5H163.476V16.25H166.825V27.325L172.075 21.425H175.65L170.775 26.975L176 34.5H172.425Z"
                                    fill="#464646"
                                />
                                <path
                                    d="M56.7718 16.75H59.8216L66.5713 34.5H63.0215L61.3716 30.075H55.1719L53.547 34.5H49.9972L56.7718 16.75ZM60.7466 27.65L58.2967 20.675L55.7469 27.65H60.7466Z"
                                    fill="#2A7AE4"
                                />
                                <path
                                    d="M68.168 16.25H71.5179V30.3C71.5179 30.7834 71.6345 31.1584 71.8678 31.425C72.1012 31.6917 72.4345 31.825 72.8678 31.825C73.0678 31.825 73.2844 31.7917 73.5177 31.725C73.7677 31.6584 74.001 31.575 74.2177 31.475L74.6677 34.025C74.2177 34.2417 73.6927 34.4084 73.0928 34.525C72.4928 34.6417 71.9512 34.7 71.4679 34.7C70.4179 34.7 69.6013 34.425 69.018 33.875C68.4514 33.3084 68.168 32.5084 68.168 31.475V16.25Z"
                                    fill="#2A7AE4"
                                />
                                <path
                                    d="M80.1269 34.75C78.777 34.75 77.7521 34.3167 77.0521 33.45C76.3522 32.5834 76.0022 31.3 76.0022 29.6V21.4H79.352V28.875C79.352 30.8917 80.0769 31.9 81.5269 31.9C82.1768 31.9 82.8018 31.7084 83.4018 31.325C84.0184 30.925 84.5184 30.325 84.9017 29.525V21.4H88.2515V30.65C88.2515 31 88.3098 31.25 88.4265 31.4C88.5598 31.55 88.7681 31.6334 89.0514 31.65V34.5C88.7181 34.5667 88.4348 34.6084 88.2015 34.625C87.9848 34.6417 87.7848 34.65 87.6015 34.65C87.0015 34.65 86.5099 34.5167 86.1266 34.25C85.76 33.9667 85.5433 33.5834 85.4766 33.1L85.4016 32.05C84.8183 32.95 84.0684 33.625 83.1518 34.075C82.2352 34.525 81.2269 34.75 80.1269 34.75Z"
                                    fill="#2A7AE4"
                                />
                                <path
                                    d="M99.38 24.3C98.3633 24.3167 97.4551 24.5167 96.6551 24.9C95.8551 25.2667 95.2802 25.825 94.9302 26.575V34.5H91.5804V21.4H94.6552V24.2C94.8885 23.75 95.1635 23.35 95.4802 23C95.7968 22.6334 96.1385 22.3167 96.5051 22.05C96.8718 21.7834 97.2384 21.5834 97.6051 21.45C97.9884 21.3 98.355 21.225 98.705 21.225C98.8883 21.225 99.0216 21.225 99.105 21.225C99.205 21.225 99.2966 21.2334 99.38 21.25V24.3Z"
                                    fill="#2A7AE4"
                                />
                                <path
                                    d="M104.652 34.75C104.018 34.75 103.427 34.65 102.877 34.45C102.327 34.2334 101.852 33.9417 101.452 33.575C101.052 33.1917 100.735 32.75 100.502 32.25C100.285 31.75 100.177 31.2 100.177 30.6C100.177 29.9834 100.31 29.4167 100.577 28.9C100.86 28.3667 101.244 27.9167 101.727 27.55C102.227 27.1834 102.818 26.9 103.502 26.7C104.185 26.4834 104.935 26.375 105.752 26.375C106.335 26.375 106.902 26.425 107.452 26.525C108.018 26.625 108.518 26.7667 108.951 26.95V26.2C108.951 25.3334 108.701 24.6667 108.202 24.2C107.718 23.7334 106.993 23.5 106.027 23.5C105.327 23.5 104.643 23.625 103.977 23.875C103.31 24.125 102.627 24.4917 101.927 24.975L100.902 22.85C102.585 21.7334 104.402 21.175 106.352 21.175C108.235 21.175 109.693 21.6417 110.726 22.575C111.776 23.4917 112.301 24.825 112.301 26.575V30.65C112.301 31 112.36 31.25 112.476 31.4C112.61 31.55 112.818 31.6334 113.101 31.65V34.5C112.535 34.6167 112.043 34.675 111.626 34.675C110.993 34.675 110.501 34.5334 110.151 34.25C109.818 33.9667 109.61 33.5917 109.526 33.125L109.451 32.4C108.868 33.1667 108.16 33.75 107.327 34.15C106.493 34.55 105.602 34.75 104.652 34.75ZM105.602 32.3C106.168 32.3 106.702 32.2 107.202 32C107.718 31.8 108.118 31.5334 108.402 31.2C108.768 30.9167 108.951 30.6 108.951 30.25V28.75C108.551 28.6 108.118 28.4834 107.652 28.4C107.185 28.3 106.735 28.25 106.302 28.25C105.435 28.25 104.727 28.45 104.177 28.85C103.627 29.2334 103.352 29.725 103.352 30.325C103.352 30.8917 103.568 31.3667 104.002 31.75C104.435 32.1167 104.968 32.3 105.602 32.3Z"
                                    fill="#2A7AE4"
                                />
                            </svg>
                        </Link>

                        <div className="relative hidden md:block">
                            <input
                                type="text"
                                placeholder="¿Qué deseas buscar?"
                                className="font-Raleway font-normal text-sm w-72 xl:w-[24.7rem] text-seconday-gray border bg-searchBar-background rounded-full py-2 px-4 focus:outline-none focus:border-primary-blue"
                            />

                            <img
                                className="absolute top-0 right-5 flex items-center justify-center h-full w-5"
                                src="/images/second__search__icon.svg"
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
                        Editar producto
                    </h2>

                    <form
                        className="flex flex-col gap-4 mt-4"
                        onSubmit={handleSubmit}>
                        <div className="w-full md:w-1/2 h-[15rem] rounded-lg border-2 border-dashed border-primary-blue bg-white">
                            <img
                                src={imageUrl}
                                alt="Vista previa de la imagen"
                                className="w-full h-full"
                            />
                        </div>

                        <div>
                            <label htmlFor="imageUrl">URL de la imagen:</label>
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
                            <label htmlFor="categoria">Categoría:</label>
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
                            <label htmlFor="nombreProducto">
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
                            <label htmlFor="precioProducto">
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
                            <label htmlFor="descripcionProducto">
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
                                Editar producto
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
