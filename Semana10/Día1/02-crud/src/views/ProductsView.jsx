import { useState, useEffect } from "react";
import { readProducts } from "../services/productService";
import TableData from "../components/TableData";
import { Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductsView = () => {
  //truthy y falsy
  const [products, setProducts] = useState(null);
  /**1. Objetivo:mostrar productos
   * 2. Donde estan los productos -> mockapi
   * 3. Cómo los obtengo???? -> axios/service
   * 4. Cómo los muestro??? -> transformandolo a algo que el navegador entienda
   */
  const navigate = useNavigate();

  const headers = [
    //name será el nombre del campo desde la API
    //label como queremos mostrarlo
    { name: "producto_nombre", label: "Nombre" },
    { name: "producto_descripcion", label: "Descripción" },
    { name: "producto_precio", label: "Precio" },
    // { name: "producto_imagen", label: "Imagen"}
  ];

  //creamos un arreglo de acciones (editar, eliminar)
  const actionsTable = [
    {
      content: (info) => (
        <button
          className="btn btn-sm bg-yellow-500 text-white"
          onClick={() => {
            // console.log("acción", info);
            navigate(`/editar/${info.id}`)
          }}
        >
          <Pencil />
        </button>
      ),
    },
  ];

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
      {/* {products ? ( // verificando el tipo de dato
        products.map((prod) => ( //transformamos los productos a algo entendible por el navegador
          <div key={prod.id}>
            <h3>{prod.producto_nombre}</h3>
          </div>
        ))
      ) : ( //si no hay productos muestro otro mensaje
        <p>No hay productos aún</p>
      )} */}
      <TableData data={products} headers={headers} actions={actionsTable} />
    </div>
  );
};

export default ProductsView;
