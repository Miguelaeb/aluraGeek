import React, { useState, useEffect } from "react";
import { consoleData } from "../consoleData";

export default function ConsoleGalery() {
    const [visibleconsoleData, setVisibleconsoleData] = useState(() => {
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
            setVisibleconsoleData(6);
        } else if (screenWidth >= 375) {
            setVisibleconsoleData(4);
        } else {
            setVisibleconsoleData(2);
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
                    Consolas
                </h2>

                <div className="flex justify-between items-center gap-1">
                    <button className=" font-Raleway font-bold text-sm xl:text-base text-primary-blue">
                        Ver Todo
                    </button>
                    <img src="images/arrow.svg" alt="" />
                </div>
            </div>

            <div className=" w-full grid grid-cols-2 mt-4 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {consoleData.slice(0, visibleconsoleData).map((consoleData) => (
                    <div key={consoleData.id} className="consoleData-card flex flex-col gap-2">
                        <img
                            className=" w-full"
                            src={consoleData.image}
                            alt={consoleData.name}
                        />
                        <h3 className=" font-Raleway font-medium text-sm text-seconday-gray">
                            {consoleData.name}
                        </h3>
                        <p className=" font-Raleway font-bold text-base text-seconday-gray">
                            {consoleData.price}
                        </p>
                        <button className=" font-Raleway font-bold text-sm text-left text-primary-blue">
                            {" "}
                            {consoleData.button}{" "}
                        </button>
                    </div>
                ))}
            </div>
        </section>

    );
}
