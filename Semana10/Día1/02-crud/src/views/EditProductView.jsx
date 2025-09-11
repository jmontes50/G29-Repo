import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { readProductById, updateProduct } from "../services/productService";
import Input from "../components/Input";
import Swal from "sweetalert2";

const EditProductView = () => {
  const [product, setProduct] = useState({
    producto_nombre: "",
    producto_precio: 0,
    producto_descripcion: "",
    producto_imagen: "",
    //id
  }); //cuando se Hace el setProduct en useEffect estamos añadiendo el id

  const { id } = useParams(); //recordemos que esto viene de la url
  //ej. /editar/5
  // console.log(id);
  const navigate = useNavigate();

  const handleInput = (event) => {
    console.log("target", event.target);
    console.log(event.target.value);

    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await updateProduct(product)
      // alert("actualizado!!!")
      await Swal.fire({
        title:"Producto editado!",
        text:`${product.producto_nombre} editado correctamente`,
        icon:'success',
        theme:'dark'
      });
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const inputsInfo = [
    { name: "producto_nombre", label: "Nombre del producto", type: "text" },
    { name: "producto_descripcion", label: "Descripción", type: "text" },
    { name: "producto_precio", label: "Precio del producto", type: "number" },
  ];

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await readProductById(id);
        // console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Editar Producto</h1>
      <form onSubmit={handleSubmit}>
        {inputsInfo.map((item, index) => (
          <Input
            key={index}
            value={product}
            name={item.name}
            label={item.label}
            type={item.type}
            handleInput={handleInput}
          />
        ))}
        <button type="submit" className="bg-green-600 text-white p-3 rounded">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default EditProductView;
