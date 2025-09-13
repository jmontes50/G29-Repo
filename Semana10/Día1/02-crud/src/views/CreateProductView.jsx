import { useState } from "react";
import Input from "../components/Input";
import { createProduct } from "../services/productService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { uploadFile } from "../services/supabaseService";

const CreateProductView = () => {
  const [product, setProduct] = useState({
    producto_nombre: "",
    producto_descripcion: "",
    producto_precio: 0,
  });
  const [fileImage, setFileImage] = useState(null);

  let navigate = useNavigate();

  const handleInput = (event) => {
    console.log("target", event.target);
    console.log(event.target.value);

    setProduct({ ...product, [event.target.name]: event.target.value });
  };
/**1.Obj: crear un nuevo registro
   * 2 de donde sacamos los datos -> form
   * 3. tengo los datos tengo que transformarlos -> JSON
   * 4. Envio
   * 5. tengo que mostrar un feedback
   */
  const handleSubmit = async (event) => {
    //01 - subir la imagen ---> de que nos de una URL
    //02 - ya con la URL recien creamos el producto en mockapi
    event.preventDefault();
    try {
      const url = await uploadFile(fileImage);
      return; //va a ser temporal
      await createProduct(product);
      // alert("Producto Creado");
      await Swal.fire({
        title: `${product.producto_nombre} creado exitosamente`,
        text: "Operación realizada",
        icon: "success",
        theme: "dark",
      });
      // console.log("El usuario interactuo!!")
      //navigate puede recibir la ruta a la que deseamos ir
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputFile = (event) => {
    // console.log(event.target.files[0])
    setFileImage(event.target.files[0]);
  }

  const inputsInfo = [
    { name: "producto_nombre", label: "Nombre del producto", type: "text" },
    { name: "producto_descripcion", label: "Descripción", type: "text" },
    { name: "producto_precio", label: "Precio del producto", type: "number" },
  ];

  return (
    <div>
      <h1>Crear Producto</h1>
      {/* el submit del form tiene evento por defecto */}
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
        {/* input file */}
        <div className="mb-3 p-2">
          <label className="block mb-1" htmlFor="input-file">
            Imagen del producto
          </label>
          <input
            id="input-file"
            type="file"
            placeholder={`Seleccione imagen`}
            onChange={handleInputFile}
            className="file-input w-full"
            // multiple
          />
        </div>
        <button type="submit" className="bg-green-600 text-white p-3 rounded">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default CreateProductView;
