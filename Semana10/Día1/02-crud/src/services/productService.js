//productService.js se encargará del manejo de datos con mockapi para los productos
import axios from "axios";

const readProducts = async () => {
  try {
    const result =  await axios.get("https://68afa145b91dfcdd62bcb6b1.mockapi.io/productos");
    // console.log(result);
    if(result.status === 200){
      return result.data;
    } else {
      throw new Error("error al solicitar datos")
    }

  } catch (error) {
    // console.log(error)
    throw error
  }
}

export {
  readProducts
}
