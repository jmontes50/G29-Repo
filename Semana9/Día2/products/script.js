//script.js
import { obtenerProductos, crearProducto } from "./productService.js";
import ProductComponent from "./ProductComponent.js";

const seccionProductos = document.getElementById("seccion-productos");
const formProducto = document.getElementById("form-producto");
const inputNombre = document.getElementById("producto-nombre");
const inputPrecio = document.getElementById("producto-precio");

const dibujarProductos = async () => {
  const productosObtenidos = await obtenerProductos();

  seccionProductos.innerHTML = ""; //limpiando

  productosObtenidos.forEach((producto) => {
      const divProducto = ProductComponent(producto);
    seccionProductos.appendChild(divProducto);
  });
}


const App = async () => {
  // const productosObtenidos = await obtenerProductos();
  // console.log(productosObtenidos)
  dibujarProductos();

  //Creación de producto
  formProducto.addEventListener("submit", async (ev) => {
    ev.preventDefault(); //prevenimos el evento por defecto
    // console.log("submit!!!")
    // console.log(typeof inputPrecio.value)
    const objNuevoProducto = {
      producto_nombre: inputNombre.value,
      producto_precio: Number(inputPrecio.value)
    }
    console.log(objNuevoProducto)
    await crearProducto(objNuevoProducto)
    //volvemos a llamar para obtener lod productos y dibujarlos
    dibujarProductos();
  })
}
App();
