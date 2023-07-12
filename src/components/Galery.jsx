import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Galery() {
    const [visibleData, setVisibleData] = useState(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1000) {
            return 6;
        } else if (screenWidth >= 375) {
            return 4;
        } else {
            return 2;
        }
    });

    function handleResize() {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1000) {
            setVisibleData(6);
        } else if (screenWidth >= 375) {
            setVisibleData(4);
        } else {
            setVisibleData(2);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [starWarsItems, setStarWarsItems] = useState([]);
    const [consoleItems, setConsoleItems] = useState([]);
    const [variousItems, setVariousItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/products")
          .then((response) => {
            const data = response.data;
            const starWarsItemsData = data.filter((item) => item.category === "StarWars");
            const consoleItemsData = data.filter((item) => item.category === "console");
            const variousItemsData = data.filter((item) => item.category === "various");
    
            setStarWarsItems(starWarsItemsData);
            setConsoleItems(consoleItemsData);
            setVariousItems(variousItemsData);
          })
          .catch((error) => {
            console.error("Error fetching product data:", error);
          });
      }, []);

    return (
        <section className="flex flex-col gap-4 md:gap-8 lg:gap-16">
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="font-Raleway font-bold text-xl xl:text-4xl text-seconday-gray">
                        Star Wars
                    </h2>
                    <div className="flex justify-between items-center gap-1">
                        <Link
                            to="/viewAllStarWarsProducts"
                            className="font-Raleway font-bold text-sm xl:text-base text-primary-blue">
                            Ver Todo
                        </Link>
                        <img src="images/arrow.svg" alt="" />
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 mt-4 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {starWarsItems.slice(0, visibleData).map((item) => (
                        <div
                            key={item.id}
                            className="startWarsData-card flex flex-col gap-2">
                            <img
                                className="w-full"
                                src={item.image}
                                alt={item.name}
                            />
                            <h3 className="font-Raleway font-medium text-sm text-seconday-gray">
                                {item.name}
                            </h3>
                            <p className="font-Raleway font-bold text-base text-seconday-gray">
                                {item.price}
                            </p>
                            <Link to={`/viewProduct/${item.id}`}>
                                <button className="font-Raleway font-bold text-sm text-left text-primary-blue">
                                    {item.button}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="flex justify-between items-center">
                    <h2 className="font-Raleway font-bold text-xl xl:text-4xl text-seconday-gray">
                        Consolas
                    </h2>
                    <div className="flex justify-between items-center gap-1">
                        <Link
                            to="/viewAllConsoleProducts"
                            className="font-Raleway font-bold text-sm xl:text-base text-primary-blue">
                            Ver Todo
                        </Link>
                        <img src="images/arrow.svg" alt="" />
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 mt-4 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {consoleItems.slice(0, visibleData).map((item) => (
                        <div
                            key={item.id}
                            className="consoleData-card flex flex-col gap-2">
                            <img
                                className="w-full"
                                src={item.image}
                                alt={item.name}
                            />
                            <h3 className="font-Raleway font-medium text-sm text-seconday-gray">
                                {item.name}
                            </h3>
                            <p className="font-Raleway font-bold text-base text-seconday-gray">
                                {item.price}
                            </p>
                            <Link to={`/viewProduct/${item.id}`}>
                                <button className="font-Raleway font-bold text-sm text-left text-primary-blue">
                                    {item.button}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="flex justify-between items-center">
                    <h2 className="font-Raleway font-bold text-xl xl:text-4xl text-seconday-gray">
                        Diversos
                    </h2>
                    <div className="flex justify-between items-center gap-1">
                        <Link
                            to="/viewAllVaiousProducts"
                            className="font-Raleway font-bold text-sm xl:text-base text-primary-blue">
                            Ver Todo
                        </Link>
                        <img src="images/arrow.svg" alt="" />
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 mt-4 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {variousItems.slice(0, visibleData).map((item) => (
                        <div
                            key={item.id}
                            className="variousData-card flex flex-col gap-2">
                            <img
                                className="w-full"
                                src={item.image}
                                alt={item.name}
                            />
                            <h3 className="font-Raleway font-medium text-sm text-seconday-gray">
                                {item.name}
                            </h3>
                            <p className="font-Raleway font-bold text-base text-seconday-gray">
                                {item.price}
                            </p>
                            <Link to={`/viewProduct/${item.id}`}>
                                <button className="font-Raleway font-bold text-sm text-left text-primary-blue">
                                    {item.button}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
