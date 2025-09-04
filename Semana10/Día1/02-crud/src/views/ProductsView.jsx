import { useState, useEffect } from "react";
import { readProducts } from "../services/productService";

const ProductsView = () => {
  const [products, setProducts] = useState([]);
  /**1. Objetivo:mostrar productos
   * 2. Donde estan los productos -> mockapi
   * 3. Cómo los obtengo???? -> axios/service
   * 4. Cómo los muestro??? ->
   */

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsObtained = await readProducts();
        console.log(productsObtained);
        setProducts(productsObtained);
      } catch (error) {
        console.log(error)
      }
    };
    getProducts();
  }, []);

  //Renderizado de listas

  return <div>
    {products.map((prod) => (
      <div>
        <h3>{prod.producto_nombre}</h3>
      </div>
    ))}
  </div>;
};

export default ProductsView;
