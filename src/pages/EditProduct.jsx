import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [categoria, setCategoria] = useState("");
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState("");
  const [descripcionProducto, setDescripcionProducto] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`https://alura-geek-gamma-ivory.vercel.app/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setImageUrl(response.data.image);
        setCategoria(response.data.category);
        setNombreProducto(response.data.name);
        setPrecioProducto(response.data.price);
        setDescripcionProducto(response.data.description);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const updatedProduct = {
      id: product.id,
      image: imageUrl,
      category: categoria,
      name: nombreProducto,
      price: precioProducto,
      description: descripcionProducto,
    };

    axios
      .put(
        `https://alura-geek-gamma-ivory.vercel.app/products/${id}`,
        updatedProduct
      )
      .then((response) => {
        console.log("Producto actualizado con éxito:", response.data);
        // Lógica adicional después de actualizar el producto
      })
      .catch((error) => {
        console.error("Error al actualizar el producto:", error);
        // Lógica adicional en caso de error
      });

    setErrors({});
  };

  const validateForm = () => {
    let hasErrors = false;
    const newErrors = {};

    if (!imageUrl) {
      newErrors.imageUrl = "Debes proporcionar una URL de imagen";
      hasErrors = true;
    }

    if (!categoria || !["StarWars", "console", "various"].includes(categoria)) {
      newErrors.categoria = "Debes seleccionar una categoría válida";
      hasErrors = true;
    }

    if (!nombreProducto) {
      newErrors.nombreProducto = "Debes proporcionar un nombre de producto";
      hasErrors = true;
    }

    if (!precioProducto) {
      newErrors.precioProducto = "Debes proporcionar un precio de producto";
      hasErrors = true;
    }

    if (!descripcionProducto) {
      newErrors.descripcionProducto =
        "Debes proporcionar una descripción de producto";
      hasErrors = true;
    }

    setErrors(newErrors);

    return !hasErrors;
  };

  return (
    <div>
      <div className="m-4  lg:m-8">
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
                src="/images/second__search__icon.svg"
                alt=""
              />
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <Link to="/admin">
              <button className="px-4 py-3 text-sm font-semibold transition duration-300 ease-in-out border border-solid font-Raleway text-primary-blue border-primary-blue w-42 md:w-40 xl:w-48 hover:scale-110">
                Menú Administrador
              </button>
            </Link>
            <img
              className="md:hidden"
              src="/images/search__icon.svg"
              alt="search icon"
            />
          </div>
        </nav>
      </div>
      <div className="p-4 bg-searchBar-background md:py-8 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-Raleway font-bold text-[1.375rem] text-seconday-gray">
            Editar producto
          </h2>

          <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
            <div className="w-full md:w-1/2 h-[15rem] rounded-lg border-2 border-dashed border-primary-blue bg-white">
              <img
                src={imageUrl}
                alt="Vista previa de la imagen"
                className="object-cover w-full h-full"
              />
            </div>

            <div>
              <label htmlFor="imageUrl">URL de la imagen:</label>
              <input
                className="block p-2.5 w-full font-Raleway font-normal text-base text-seconday-gray border border-primary-blue outline-none"
                type="text"
                id="imageUrl"
                placeholder="URL de la imagen"
                value={imageUrl}
                onChange={(event) => setImageUrl(event.target.value)}
              />
              {errors.imageUrl && (
                <p className="font-medium text-red-500 font-Raleway">
                  {errors.imageUrl}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="categoria">Categoría:</label>
              <input
                className="block p-2.5 w-full font-Raleway font-normal text-base text-seconday-gray border border-primary-blue outline-none"
                type="text"
                id="categoria"
                placeholder="Categoría"
                value={categoria}
                onChange={(event) => setCategoria(event.target.value)}
              />
              {errors.categoria && (
                <p className="font-medium text-red-500 font-Raleway">
                  {errors.categoria}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="nombreProducto">Nombre del producto:</label>
              <input
                className="block p-2.5 w-full font-Raleway font-normal text-base text-seconday-gray border border-primary-blue outline-none"
                type="text"
                id="nombreProducto"
                placeholder="Nombre del producto"
                value={nombreProducto}
                onChange={(event) => setNombreProducto(event.target.value)}
              />
              {errors.nombreProducto && (
                <p className="font-medium text-red-500 font-Raleway">
                  {errors.nombreProducto}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="precioProducto">Precio del producto:</label>
              <input
                className="block p-2.5 w-full font-Raleway font-normal text-base text-seconday-gray border border-primary-blue outline-none"
                type="text"
                id="precioProducto"
                placeholder="Precio del producto"
                value={precioProducto}
                onChange={(event) => setPrecioProducto(event.target.value)}
              />
              {errors.precioProducto && (
                <p className="font-medium text-red-500 font-Raleway">
                  {errors.precioProducto}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="descripcionProducto">
                Descripción del producto:
              </label>
              <textarea
                className="block p-2.5 w-full h-[150px] md:h-[70px] lg:h-[150px] font-Raleway font-normal text-base text-seconday-gray resize-none border border-primary-blue outline-none"
                id="descripcionProducto"
                placeholder="Descripción del producto"
                value={descripcionProducto}
                onChange={(event) => setDescripcionProducto(event.target.value)}
              />
              {errors.descripcionProducto && (
                <p className="font-medium text-red-500 font-Raleway">
                  {errors.descripcionProducto}
                </p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                className="w-full px-4 py-3 text-sm font-semibold text-white transition duration-300 ease-in-out font-Raleway bg-primary-blue hover:scale-110"
                type="submit"
              >
                Editar producto
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
