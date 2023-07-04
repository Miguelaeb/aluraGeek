import React, { useState, useEffect } from "react";
import { variousData } from "../data/variousData";
import { Link } from "react-router-dom";

export default function VariousGalery() {
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

    function handleResize() {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1000) {
            setVisiblevariousData(6);
        } else if (screenWidth >= 375) {
            setVisiblevariousData(4);
        } else {
            setVisiblevariousData(2);
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
                    Diversos
                </h2>

                <div className="flex justify-between items-center gap-1">
                    <Link className=" font-Raleway font-bold text-sm xl:text-base text-primary-blue">
                        Ver Todo
                    </Link>
                    <img src="images/arrow.svg" alt="" />
                </div>
            </div>

            <div className=" w-full grid grid-cols-2 mt-4 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {variousData.slice(0, visiblevariousData).map((variousData) => (
                    <div key={variousData.id} className="variousData-card flex flex-col gap-2">
                        <img
                            className=" w-full"
                            src={variousData.image}
                            alt={variousData.name}
                        />
                        <h3 className=" font-Raleway font-medium text-sm text-seconday-gray">
                            {variousData.name}
                        </h3>
                        <p className=" font-Raleway font-bold text-base text-seconday-gray">
                            {variousData.price}
                        </p>
                        <button className=" font-Raleway font-bold text-sm text-left text-primary-blue">
                            {" "}
                            {variousData.button}{" "}
                        </button>
                    </div>
                ))}
            </div>
        </section>

    );
}
