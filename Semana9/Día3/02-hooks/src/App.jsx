import { useState } from "react";

const App = () => {
  // let numero = 10;
  // const [estado, funcionActualizaElEstado] = useState(valorInicialEstado)
  const [numero, setNumero] = useState(10);
  const [texto, setTexto] = useState("Hola!!!");
  //c/vez que cambie un estado, La interfaz se actualizara pero con el estado actualizado
  // console.log(setNumero)

  const cambiarNumero = () => {
    setNumero(numero + 1);
    // numero = 50;
    // console.log("Ejecutando cambiar Numero", numero);
  };
  const reducirNumero = () => {
    setNumero(numero - 1);
  };

  const manejarInput = (event) => {
    console.log(event.target.value);
    setTexto(event.target.value);
  }

  return (
    <>
      <h1>El número es: {numero}</h1>
      <button onClick={cambiarNumero}>Aumentar</button>
      <button onClick={reducirNumero}>Reducir</button>
      <hr/>
      <h3>El texto es: {texto}</h3>
      {/* En el caso de los inputs hay una idea, que se llama componentes controlados -> TODO INPUT DEBE ESTAR DE ALGUNA MANERA AMARRADO A UN ESTADO */}
      {/* onChange se dispara cuando un input cambia de valor */}
      <input type="text" value={texto} onChange={manejarInput} />
    </>
  );
};

export default App;
