import React from 'react'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import StarWarsGalery from "../components/StarWarsGalery";
import ConsoleGalery from "../components/ConsoleGalery";
import VariousGalery from "../components/VariousGalery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
          <Navbar />
          <Header />
          <main className=" px-4 lg:px-8 bg-searchBar-background">
            <div className="flex flex-col gap-4 mt-4 md:mt-8 lg:mt-16 md:gap-8 lg:gap-16 xl:mt-16 xl:max-w-[80rem] mx-auto">
              <StarWarsGalery />
              <ConsoleGalery />
              <VariousGalery />
            </div>
          </main>
          <Contact />
          <Footer />
        </div>
  )
}
