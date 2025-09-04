import { useState } from "react";

const CreateProductView = () => {
  const [product, setProduct] = useState({
    producto_nombre:"",
    producto_descripcion:"",
    producto_precio:0,
  })

  const handleInput = (event) => {
    console.log(event)
  }
  /**1.Obj: crear un nuevo registro
   * 2 de donde sacamos los datos -> form
   * 3. tengo los datos tengo que transformarlos
   * 4. Envio
   * 5. tengo que mostrar un feedback
   */
  return (
    <div>
      <h1>Crear Producto</h1>
      <form>
        <input type="text" placeholder="Nombre" value={product.producto_nombre} handleInput={handleInput}/>
        <input type="number" placeholder="Precio" value={product.producto_precio}  handleInput={handleInput}/>

      </form>
    </div>
  )
}

export default CreateProductView
