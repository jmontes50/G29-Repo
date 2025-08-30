import { useState } from "react";

const App = () => {
  // let numero = 10;
  // const [estado, funcionActualizaElEstado] = useState(valorInicialEstado)
  const [numero, setNumero] = useState(10);
  //c/vez que cambie un estado, La interfaz se actualizara pero con el estado actualizado
  console.log(setNumero)

  const cambiarNumero = () => {
    setNumero(numero + 1);
    // numero = 50;
    // console.log("Ejecutando cambiar Numero", numero);
  };
  const reducirNumero = () => {
    setNumero(numero - 1);
  }

  return (
    <>
      <h1>El número es: {numero}</h1>
      <button onClick={cambiarNumero}>Aumentar</button>
      <button onClick={reducirNumero}>Reducir</button>
    </>
  );
};

export default App;
