import { useState, useEffect } from "react";
import { readProducts } from "../services/productService";
import TableData from "../components/TableData";

const ProductsView = () => {
  //truthy y falsy
  const [products, setProducts] = useState(null);
  /**1. Objetivo:mostrar productos
   * 2. Donde estan los productos -> mockapi
   * 3. Cómo los obtengo???? -> axios/service
   * 4. Cómo los muestro??? -> transformandolo a algo que el navegador entienda
   */

  const headers = [
    { name: "producto_nombre", label: "Nombre"},
    { name: "producto_descripcion", label: "Descripción"},
    { name: "producto_precio", label: "Precio"}
  ]

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsObtained = await readProducts();
        console.log(productsObtained);
        setProducts(productsObtained);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  //Renderizado de listas
  return (
    <div>
      {/* {products.length > 0 && products ? ( // verificamos que la
      // longitud sea mayor que 0 */}
      {products ? ( // verificando el tipo de dato
        products.map((prod) => ( //transformamos los productos a algo entendible por el navegador
          <div key={prod.id}>
            <h3>{prod.producto_nombre}</h3>
          </div>
        ))
      ) : ( //si no hay productos muestro otro mensaje
        <p>No hay productos aún</p>
      )}
      <TableData data={products} headers={headers} />
    </div>
  );
};

export default ProductsView;
