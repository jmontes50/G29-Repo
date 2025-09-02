import { useState, useEffect } from "react";
import Boton from "./Boton";
import Observador from "./Observador";
import axios from "axios";

const App = () => {
  const [contador, setContador] = useState(1);
  const [prendido, setPrendido] = useState(true);

  // console.log(contador)
  // console.log("setContador", setContador)
  console.log("1. estoy en el cuerpo del componente");

  const manejarContador = () => {
    setContador(contador + 1);
  }

  const manejarPrendido = () => {
    setPrendido(!prendido);
  }

  //useEffect(función, [dependencias])
  //la función indicada de useEffect, se va a ejecutar cuando cambie el estado o haya nuevos props
  useEffect(() => {
    console.log("2. Me estoy ejecutando en el useEffect!!!");
    axios.get('https://68afa145b91dfcdd62bcb6b1.mockapi.io/productos')
    .then((respuesta) => {
      console.log(respuesta)
    })
    .catch((error) => {
      console.log(error)
    })
    //podemos declarar funciones aqui adentro, y aquí si se le puede poner nombre, ej funciones con async
    //con las dependencias podemos indicar a que estado, props, variable vamos a escuchar, cuando cambie se ejecutará el useEffect
  // }, [prendido])
  }, [])


  return (
    // EL Fragment <> es un elemento que no se renderiza/dibuja
    <>
      <h1>App: {contador}</h1>
      {console.log("3. estoy dentro del return")}
      <button onClick={manejarContador}>
        Aumentar
      </button>
      <hr />
      <Boton manejarContador={manejarContador} />
      <hr/>
      <Observador contador={contador} />
      <hr />
      {/* renderizado condicional */}
      {prendido ? <p>"Esta prendido💡"</p> : <p>"Esta apagado 📴 "</p>}
      <button onClick={manejarPrendido}>
        Interruptor
      </button>
    </>
  )
}

export default App;
