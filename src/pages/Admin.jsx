import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SecondNavbar from "../components/SecondNavbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Admin() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll up when the page loads
    }, []);

    const [starWarsItems, setStarWarsItems] = useState([]);
    const [consoleItems, setConsoleItems] = useState([]);
    const [variousItems, setVariousItems] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://alura-geek-gamma-ivory.vercel.app/products?category=StarWars"
            )
            .then((response) => {
                setStarWarsItems(response.data);
            })
            .catch((error) => {
                console.error("Error fetching Star Wars products data:", error);
            });

        axios
            .get(
                "https://alura-geek-gamma-ivory.vercel.app/products?category=console"
            )
            .then((response) => {
                setConsoleItems(response.data);
            })
            .catch((error) => {
                console.error("Error fetching console products data:", error);
            });

        axios
            .get(
                "https://alura-geek-gamma-ivory.vercel.app/products?category=various"
            )
            .then((response) => {
                setVariousItems(response.data);
            })
            .catch((error) => {
                console.error("Error fetching various products data:", error);
            });
    }, []);

    const deleteProduct = (productId) => {
        axios
            .delete(
                `https://alura-geek-gamma-ivory.vercel.app/products/${productId}`
            )
            .then((response) => {
                setStarWarsItems(
                    starWarsItems.filter((item) => item.id !== productId)
                );
                setConsoleItems(
                    consoleItems.filter((item) => item.id !== productId)
                );
                setVariousItems(
                    variousItems.filter((item) => item.id !== productId)
                );
            })
            .catch((error) => {
                console.error("Error deleting product:", error);
            });
    };

    return (
        <div>
            <SecondNavbar />

            <div className="bg-searchBar-background p-4 md:py-8">
                <div className="flex flex-col md:justify-between gap-4 mb-8 lg:px-8 xl:p-0 xl:max-w-[80rem] mx-auto md:flex-row">
                    <h2 className="font-Raleway font-bold text-[1.375rem] text-seconday-gray flex items-center">
                        Todos los productos
                    </h2>
                    <Link to="/addProduct">
                        <button className="font-Raleway font-semibold text-sm bg-primary-blue text-white w-36 py-3 hover:scale-110 transition duration-300 ease-in-out">
                            Agregar producto
                        </button>
                    </Link>
                </div>

                <div className="flex flex-col lg:px-8 xl:p-0 xl:max-w-[80rem] mx-auto mb-8">
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-y-8">
                        {starWarsItems.map((starWarsItem) => (
                            <div
                                key={starWarsItem.id}
                                className="relative startWarsData-card flex flex-col gap-2">
                                <img
                                    className="w-full h-48 object-cover"
                                    src={starWarsItem.image}
                                    alt={starWarsItem.name}
                                />
                                <h3 className="font-Raleway font-medium text-sm text-seconday-gray">
                                    {starWarsItem.name}
                                </h3>
                                <p className="font-Raleway font-bold text-base text-seconday-gray">
                                    {starWarsItem.price}
                                </p>
                                <div className="absolute right-4 top-4 flex gap-6">
                                    <svg
                                        className=" fill-white cursor-pointer hover:fill-[#ee5e5e] hover:scale-110 transition duration-300 ease-in-out"
                                        width="14"
                                        height="18"
                                        viewBox="0 0 14 18"
                                        fill="current"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
                                            fill="current"
                                            onClick={() =>
                                                deleteProduct(starWarsItem.id)
                                            }
                                        />
                                    </svg>

                                    <Link to={`/editProduct/${starWarsItem.id}`}>
                                        <svg
                                            className=" fill-white hover:fill-blue-500 hover:scale-110 transition duration-300 ease-in-out"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 19 19"
                                            fill="current"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z"
                                                fill="current"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}

                        {consoleItems.map((consoleItem) => (
                            <div
                                key={consoleItem.id}
                                className="relative consoleData-card flex flex-col gap-2">
                                <img
                                    className="w-full h-48 object-cover"
                                    src={consoleItem.image}
                                    alt={consoleItem.name}
                                />
                                <h3 className="font-Raleway font-medium text-sm text-seconday-gray">
                                    {consoleItem.name}
                                </h3>
                                <p className="font-Raleway font-bold text-base text-seconday-gray">
                                    {consoleItem.price}
                                </p>
                                <div className="absolute right-4 top-4 flex gap-6">
                                    <svg
                                        className=" fill-white cursor-pointer hover:fill-[#ee5e5e] hover:scale-110 transition duration-300 ease-in-out"
                                        width="14"
                                        height="18"
                                        viewBox="0 0 14 18"
                                        fill="current"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
                                            fill="current"
                                            onClick={() =>
                                                deleteProduct(consoleItem.id)
                                            }
                                        />
                                    </svg>

                                    <Link to="/editProduct">
                                        <svg
                                            className=" fill-white hover:fill-blue-500 hover:scale-110 transition duration-300 ease-in-out"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 19 19"
                                            fill="current"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z"
                                                fill="current"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}

                        {variousItems.map((variousItem) => (
                            <div
                                key={variousItem.id}
                                className="relative variousData-card flex flex-col gap-2">
                                <img
                                    className="w-full h-48 object-cover"
                                    src={variousItem.image}
                                    alt={variousItem.name}
                                />
                                <h3 className="font-Raleway font-medium text-sm text-seconday-gray">
                                    {variousItem.name}
                                </h3>
                                <p className="font-Raleway font-bold text-base text-seconday-gray">
                                    {variousItem.price}
                                </p>
                                <div className="absolute right-4 top-4 flex gap-6">
                                    <svg
                                        className=" fill-white cursor-pointer hover:fill-[#ee5e5e] hover:scale-110 transition duration-300 ease-in-out"
                                        width="14"
                                        height="18"
                                        viewBox="0 0 14 18"
                                        fill="current"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
                                            fill="current"
                                            onClick={() =>
                                                deleteProduct(variousItem.id)
                                            }
                                        />
                                    </svg>

                                    <Link to="/editProduct">
                                        <svg
                                            className=" fill-white hover:fill-blue-500 hover:scale-110 transition duration-300 ease-in-out"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 19 19"
                                            fill="current"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z"
                                                fill="current"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </div>
    );
}
