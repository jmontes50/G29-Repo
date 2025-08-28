//ProductComponent.js
/** JSDoc
 *
 * @param { product_nombre, producto_imagen, producto_descripcion, producto_precio, id} objProducto
 */
const ProductComponent = (objProducto) => {
  const { product_nombre, producto_imagen, producto_descripcion, producto_precio, id } = objProducto;
  const div = document.createElement("div");
  div.innerHTML = `
    <div>
      <img src="${producto_imagen}" alt="..." width="300" />
      <h4>${producto_nombre}</h4>
      <h5>${producto_precio}</h5>
      <p>${producto_descripcion}</p>
    </div>
  `
  //podria añadir un button usando un div.querySelector por ej.
  return div;
}

export default ProductComponent;
