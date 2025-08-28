//script.js
import { obtenerProductos } from "./productService.js";
import ProductComponent from "./ProductComponent.js";

const seccionProductos = document.getElementById("seccion-productos");




const App = async () => {
  const productosObtenidos = await obtenerProductos();
  // console.log(productosObtenidos)
  productosObtenidos.forEach((producto) => {
    const divProducto = ProductComponent(producto);
    seccionProductos.appendChild(divProducto);
  });
}
App();
