import { useState } from "react";
import Boton from "./Boton";

const App = () => {
  const [contador, setContador] = useState(1);

  console.log(contador)
  console.log("setContador", setContador)

  const manejarContador = () => {
    setContador(contador + 1);
  }

  return (
    // EL Fragment <> es un elemento que no se renderiza/dibuja
    <>
      <h1>App: {contador}</h1>
      <button onClick={manejarContador}>
        Aumentar
      </button>
      <hr />
      <Boton manejarContador={manejarContador} />
    </>
  )
}

export default App;
