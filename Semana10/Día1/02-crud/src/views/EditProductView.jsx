import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readProductById } from "../services/productService";

const EditProductView = () => {
  const [product, setProduct] = useState({
    producto_nombre:"",
    producto_precio:0,
    producto_descripcion:"",
    producto_imagen:"",
  })

  const { id } = useParams(); //recordemos que esto viene de la url
  //ej. /editar/5
  console.log(id);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await readProductById(id)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [])

  return (
    <div>EditProductView</div>
  )
}

export default EditProductView
