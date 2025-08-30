const App = () => {
  let numero = 10;

  const cambiarNumero = () => {
    console.log("Ejecutando cambiar Numero");
    numero = 50;
  };

  return (
    <>
      <h1>El número es: {numero}</h1>
      <button onClick={cambiarNumero}>Cambiar</button>
    </>
  );
};

export default App;
