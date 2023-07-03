import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import StarWarsGalery from "./components/StarWarsGalery";
import ConsoleGalery from "./components/ConsoleGalery";
import VariousGalery from "./components/VariousGalery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <main>
                <div className=" flex flex-col p-4 gap-4 md:gap-8 xl:p-0 xl:mt-16 xl:max-w-[80rem] 2xl:max-w-[100rem] lg:mx-auto">
                    <StarWarsGalery />
                    <ConsoleGalery />
                    <VariousGalery />
                </div>
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

// TODO fix padding or margin of the galeries
// TODO fix contact section 