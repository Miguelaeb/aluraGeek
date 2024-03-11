import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ViewAllVariousProducts() {
  const URL = "https://alura-geek-gamma-ivory.vercel.app/products";
  const [variousItems, setVariousItems] = useState([]);
  const [visiblevariousData, setVisiblevariousData] = useState(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1000) {
      return 6;
    } else if (screenWidth >= 375) {
      return 4;
    } else {
      return 2;
    }
  });

  const handleResize = useCallback(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1000) {
      if (variousItems.length !== 0) {
        setVisiblevariousData(variousItems.length);
      }
    } else if (screenWidth >= 375) {
      setVisiblevariousData(4);
    } else {
      setVisiblevariousData(2);
    }
  }, [variousItems.length]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const data = response.data;
        const variousItemsData = data.filter(
          (item) => item.category === "various"
        );
        if (variousItemsData.length !== 0) {
          setVariousItems(variousItemsData);
          setVisiblevariousData(variousItemsData.length);
        }
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  return (
    <div>
      <div>
        <div className="m-4 lg:m-8">
          <nav className="xl:my-8 flex justify-between items-center xl:max-w-[80rem] mx-auto">
            <div className="flex items-center justify-center gap-8">
              <Link to="/">
                <img
                  className="cursor-pointer md:w-28 lg:w-36"
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
                  className="absolute top-0 flex items-center justify-center w-5 h-full right-5"
                  src="images/second__search__icon.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="flex items-center space-x-5">
              <img
                className="md:hidden"
                src="images/search__icon.svg"
                alt="search icon"
              />
            </div>
          </nav>
        </div>

        <div className="p-4 bg-searchBar-background md:py-8 lg:py-16">
          <div className="max-w-[80rem] mx-auto">
            <h2 className="text-xl font-bold font-Raleway xl:text-4xl text-seconday-gray">
              Diversos
            </h2>
          </div>

          <div className="w-full grid grid-cols-2 mt-4 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-[80rem] mx-auto">
            {variousItems.slice(0, visiblevariousData).map((item) => (
              <Link
                to={`/viewProduct/${item.id}`}
                key={item.id}
                className="relative flex flex-col gap-2 "
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    className="object-cover w-full h-full transition-transform duration-300 transform-gpu hover:scale-110"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <h3 className="text-sm font-medium font-Raleway text-seconday-gray">
                  {item.name}
                </h3>
                <p className="text-base font-bold font-Raleway text-seconday-gray">
                  {item.price}
                </p>
                <button className="text-sm font-bold text-left font-Raleway text-primary-blue">
                  Ver producto
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
