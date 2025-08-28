//script.js
import { obtenerProductos } from "./productService.js";

const seccionProductos = document.getElementById("seccion-productos");




const App = async () => {
  const productosObtenidos = await obtenerProductos();
  console.log(productosObtenidos)
}
App();
