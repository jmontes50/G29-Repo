import { useState, useEffect } from "react";
import { readProducts } from "../services/productService";

const ProductsView = () => {
  const [products, setProducts] = useState(null);

  useEffect((readProducts) => {
    const getProducts = async () => {
      try {
        const respuesta = await readProducts();
        console.log(respuesta);
      } catch (error) {}
    };
    getProducts();
  }, []);


  return <div>ProductsView</div>;
};

export default ProductsView;
