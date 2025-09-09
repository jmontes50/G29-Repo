import saludar from "./utils.js";
//cuando va directamente el nombre de algo y no su ruta, significa que viene de los node_modules
import axios from "axios";

console.log("Hola mundo");

console.log(saludar("Jorge"));

const getData = async () => {
  try {
    const result = await axios.get("https://68afa145b91dfcdd62bcb6b1.mockapi.io/productos")
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
getData()
