import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SecondNavbar from "../components/SecondNavbar";

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
      .delete(`https://alura-geek-gamma-ivory.vercel.app/products/${productId}`)
      .then((response) => {
        setStarWarsItems(starWarsItems.filter((item) => item.id !== productId));
        setConsoleItems(consoleItems.filter((item) => item.id !== productId));
        setVariousItems(variousItems.filter((item) => item.id !== productId));
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <div>
      <SecondNavbar />
      <div className="p-4 bg-searchBar-background md:py-8">
        <div className="flex flex-col md:justify-between gap-4 mb-8 lg:px-8 xl:p-0 xl:max-w-[80rem] mx-auto md:flex-row">
          <h2 className="font-Raleway font-bold text-[1.375rem] text-seconday-gray flex items-center">
            Todos los productos
          </h2>
          <Link to="/addProduct">
            <button className="py-3 text-sm font-semibold text-white transition duration-300 ease-in-out font-Raleway bg-primary-blue w-36 hover:scale-110">
              Agregar producto
            </button>
          </Link>
        </div>

        <div className="flex flex-col lg:px-8 xl:p-0 xl:max-w-[80rem] mx-auto mb-8">
          <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 md:gap-y-8">
            {starWarsItems.map((starWarsItem) => (
              <div
                key={starWarsItem.id}
                className="relative flex flex-col gap-2 startWarsData-card"
              >
                <img
                  className="object-cover w-full h-48"
                  src={starWarsItem.image}
                  alt={starWarsItem.name}
                />
                <h3 className="text-sm font-medium font-Raleway text-seconday-gray">
                  {starWarsItem.name}
                </h3>
                <p className="text-base font-bold font-Raleway text-seconday-gray">
                  {starWarsItem.price}
                </p>
                <div className="absolute flex gap-6 right-4 top-4">
                  <svg
                    className="fill-white cursor-pointer hover:fill-[#ee5e5e] hover:scale-110 transition duration-300 ease-in-out"
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="current"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => deleteProduct(starWarsItem.id)}
                  >
                    <path
                      d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
                      fill="current"
                    />
                  </svg>
                  <Link to={`/editProduct/${starWarsItem.id}`}>
                    <svg
                      className="transition duration-300 ease-in-out fill-white hover:fill-blue-500 hover:scale-110"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
                className="relative flex flex-col gap-2 consoleData-card"
              >
                <img
                  className="object-cover w-full h-48"
                  src={consoleItem.image}
                  alt={consoleItem.name}
                />
                <h3 className="text-sm font-medium font-Raleway text-seconday-gray">
                  {consoleItem.name}
                </h3>
                <p className="text-base font-bold font-Raleway text-seconday-gray">
                  {consoleItem.price}
                </p>
                <div className="absolute flex gap-6 right-4 top-4">
                  <svg
                    className="fill-white cursor-pointer hover:fill-[#ee5e5e] hover:scale-110 transition duration-300 ease-in-out"
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="current"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => deleteProduct(consoleItem.id)}
                  >
                    <path
                      d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
                      fill="current"
                    />
                  </svg>

                  <Link to={`/editProduct/${consoleItem.id}`}>
                    <svg
                      className="transition duration-300 ease-in-out fill-white hover:fill-blue-500 hover:scale-110"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
                className="relative flex flex-col gap-2 variousData-card"
              >
                <img
                  className="object-cover w-full h-48"
                  src={variousItem.image}
                  alt={variousItem.name}
                />
                <h3 className="text-sm font-medium font-Raleway text-seconday-gray">
                  {variousItem.name}
                </h3>
                <p className="text-base font-bold font-Raleway text-seconday-gray">
                  {variousItem.price}
                </p>
                <div className="absolute flex gap-6 right-4 top-4">
                  <svg
                    className="fill-white cursor-pointer hover:fill-[#ee5e5e] hover:scale-110 transition duration-300 ease-in-out"
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="current"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => deleteProduct(variousItem.id)}
                  >
                    <path
                      d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
                      fill="current"
                    />
                  </svg>

                  <Link to={`/editProduct/${variousItem.id}`}>
                    <svg
                      className="transition duration-300 ease-in-out fill-white hover:fill-blue-500 hover:scale-110"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
    </div>
  );
}
