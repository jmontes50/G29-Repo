import { useState, useEffect } from "react";
import { readProducts } from "../services/productService";

const ProductsView = () => {
  const [products, setProducts] = useState(null);
  /**1. Objetivo:mostrar productos
   * 2. Donde estan los productos -> mockapi
   * 3. Cómo los obtengo???? -> axios/service
   * 4. Cómo los muestro??? ->
   */

  useEffect(() => {
    const getProducts = async () => {
      try {
        const respuesta = await readProducts();
        console.log(respuesta);
      } catch (error) {
        console.log(error)
      }
    };
    getProducts();
  }, []);


  return <div>ProductsView</div>;
};

export default ProductsView;
