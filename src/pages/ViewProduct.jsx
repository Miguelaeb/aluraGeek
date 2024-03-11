import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ViewProduct() {
  const URL = "https://alura-geek-gamma-ivory.vercel.app/products";
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL}/${id}`)
      .then((response) => {
        setSelectedProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [id]);

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
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    if (selectedProduct) {
      axios
        .get(
          `https://alura-geek-gamma-ivory.vercel.app/products?category=${selectedProduct.category}&id_ne=${selectedProduct.id}`
        )
        .then((response) => {
          setSimilarProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching similar products data:", error);
        });
    }
  }, [selectedProduct]);

  return (
    <div>
      <div className="m-4">
        <nav className="xl:my-8 flex justify-between items-center xl:max-w-[80rem] mx-auto">
          <div className="flex items-center justify-center gap-8">
            <Link to="/">
              <img
                className="cursor-pointer md:w-28 lg:w-36"
                src="/images/alurageek__logo.svg"
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
                src="../images/second__search__icon.svg"
                alt=""
              />
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <img
              className="md:hidden"
              src="../images/search__icon.svg"
              alt="search icon"
            />
          </div>
        </nav>
      </div>

      <div className="flex flex-col justify-center bg-searchBar-background md:p-4 xl:p-0">
        <div className="xl:max-w-[80rem] xl:mx-auto">
          {selectedProduct && (
            <div className="w-full  md:flex md:flex-row md:gap-4 lg:justify-center lg:items-center xl:mt-16">
              <img
                className=" w-full md:w-1/2 h-[400px] object-cover"
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />
              <div className="flex flex-col w-full gap-2 p-4  md:w-1/2">
                <h2 className="font-Raleway font-medium text-[1.375rem] text-seconday-gray xl:text-[3.25rem]">
                  {selectedProduct.name}
                </h2>
                <p className="text-base font-bold font-Raleway text-seconday-gray">
                  {selectedProduct.price}
                </p>
                <p className="text-sm font-normal font-Raleway text-seconday-gray xl:text-base">
                  {selectedProduct.description}
                </p>
              </div>
            </div>
          )}

          <div className="p-4 xl:p-0 xl:mb-16">
            <h2 className="font-Raleway font-bold text-[1.375rem] text-seconday-gray mb-4 lg:mb-8 md:mt-32 lg:mt-16">
              Productos similares
            </h2>

            <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {similarProducts.slice(0, visibleData).map((product) => (
                <Link
                  to={`/viewProduct/${product.id}`}
                  key={product.id}
                  className="relative flex flex-col gap-2 "
                >
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      className="object-cover w-full h-full transition-transform duration-300  transform-gpu hover:scale-110"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <h3 className="text-sm font-medium font-Raleway text-seconday-gray">
                    {product.name}
                  </h3>
                  <p className="text-base font-bold font-Raleway text-seconday-gray">
                    {product.price}
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
    </div>
  );
}
