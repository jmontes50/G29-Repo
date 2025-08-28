//script.js
import { obtenerProductos } from "./productService.js";
import ProductComponent from "./ProductComponent.js";

const seccionProductos = document.getElementById("seccion-productos");

const dibujarProductos = (productosObtenidos) => {
  seccionProductos.innerHTML = ""; //limpiando
  productosObtenidos.forEach((producto) => {
      const divProducto = ProductComponent(producto);
    seccionProductos.appendChild(divProducto);
  });
}


const App = async () => {
  const productosObtenidos = await obtenerProductos();
  // console.log(productosObtenidos)
  dibujarProductos(productosObtenidos)
}
App();
