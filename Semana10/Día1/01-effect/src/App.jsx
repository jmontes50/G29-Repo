import { useState } from "react";

const App = () => {
  const [contador, setContador] = useState(1);

  console.log(contador)
  console.log("setContador", setContador)

  const manejarContador = () => {
    setContador(contador + 1);
  }

  return (
    <>
      <h1>App: {contador}</h1>
      <button onClick={manejarContador}>
        Aumentar
      </button>
    </>
  )
}

export default App;
