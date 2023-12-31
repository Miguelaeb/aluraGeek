import React from 'react'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Galery from '../components/Galery';
import Contact from "../components/Contact";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
          <Navbar />
          <Header />
          <main className=" px-4 lg:px-8 bg-searchBar-background">
            <div className="flex flex-col gap-8 py-4 md:pt-8 lg:py-16 lg:gap-16 xl:py-16 xl:max-w-[80rem] mx-auto">
              <Galery />
            </div>
          </main>
          <Contact />
          <Footer />
        </div>
  )
}
