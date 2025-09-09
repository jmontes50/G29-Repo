import { useState } from "react";
import Input from "../components/Input";

const CreateProductView = () => {
  const [product, setProduct] = useState({
    producto_nombre: "",
    producto_descripcion: "",
    producto_precio: 0,
  });

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
  const inputsInfo = [
    { name: "producto_nombre", label: "Nombre del producto", type: "text" },
    { name: "producto_descripcion", label: "Descripción", type: "text" },
    { name: "producto_precio", label: "Precio del producto", type: "number" },
  ]

  return (
    <div>
      <h1>Crear Producto</h1>
      <form>
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
      </form>
    </div>
  );
};

export default CreateProductView;
