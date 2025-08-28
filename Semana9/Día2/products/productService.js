//productService.js
//02 funciones, 1era para obtener los productos, 2da para crear un producto

const URL =  "https://68afa145b91dfcdd62bcb6b1.mockapi.io/productos"

const obtenerProductos = async () => {
  try {
    const respuesta = await fetch(URL); //PETICIÓN, respuesta no trae los datos
    console.log("respuesta", respuesta);
    const productos = await respuesta.json(); //.json() trae los datos y los como datos de JS
    console.log("productos", productos);
    return productos;
  } catch (error) {
    console.log("error al obtener productos:", error);
  }
}


export {
  obtenerProductos
}
