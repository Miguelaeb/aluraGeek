import React, { useState, useEffect } from "react";
import { startWarsData } from "../data/startWarsData";
import { Link } from "react-router-dom";

export default function StarWarsGalery() {
    const [visiblestartWarsData, setVisiblestartWarsData] = useState(() => {
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
            setVisiblestartWarsData(6);
        } else if (screenWidth >= 375) {
            setVisiblestartWarsData(4);
        } else {
            setVisiblestartWarsData(2);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section>
            <div className="flex justify-between items-center">
                <h2 className="font-Raleway font-bold text-xl xl:text-4xl text-seconday-gray">
                    Star Wars
                </h2>

                <div className="flex justify-between items-center gap-1">
                    <Link href="#" className=" font-Raleway font-bold text-sm xl:text-base text-primary-blue">
                        Ver Todo
                    </Link>
                    <img src="images/arrow.svg" alt="" />
                </div>
            </div>

            <div className=" w-full grid grid-cols-2 mt-4 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {startWarsData.slice(0, visiblestartWarsData).map((startWarsData) => (
                    <div key={startWarsData.id} className="startWarsData-card flex flex-col gap-2">
                        <img
                            className=" w-full"
                            src={startWarsData.image}
                            alt={startWarsData.name}
                        />
                        <h3 className=" font-Raleway font-medium text-sm text-seconday-gray">
                            {startWarsData.name}
                        </h3>
                        <p className=" font-Raleway font-bold text-base text-seconday-gray">
                            {startWarsData.price}
                        </p>
                        <Link to="/viewProduct">
                        <button className=" font-Raleway font-bold text-sm text-left text-primary-blue">
                            {" "}
                            {startWarsData.button}{" "}
                        </button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>

    );
}
