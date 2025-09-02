import { useState, useEffect } from "react";
import Boton from "./Boton";
import Observador from "./Observador";

const App = () => {
  const [contador, setContador] = useState(1);
  const [prendido, setPrendido] = useState(false);

  // console.log(contador)
  // console.log("setContador", setContador)

  const manejarContador = () => {
    setContador(contador + 1);
  }

  //useEffect(función, [dependencias])
  //la función indicada de useEffect, se va a ejecutar cuando cambie el estado o haya nuevos props
  useEffect(() => {
    console.log("Me estoy ejecutando!!!");
    //podemos declarar funciones aqui adentro, y aquí si se le puede poner nombre, ej funciones con async
  })

  return (
    // EL Fragment <> es un elemento que no se renderiza/dibuja
    <>
      <h1>App: {contador}</h1>
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
    </>
  )
}

export default App;
