//productService.js se encargará del manejo de datos con mockapi para los productos
import axios from "axios";

const readProducts = async () => {
  try {
    const result =  await axios.get("https://68afa145b91dfcdd62bcb6b1.mockapi.io/productos");
    return result.data;
  } catch (error) {
    console.log(error)
  }
}

export {
  readProducts
}
