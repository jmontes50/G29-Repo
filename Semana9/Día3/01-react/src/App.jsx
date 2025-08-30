//1. El nombre de los componentes siempre tiene que comenzar con mayuscula
const App = () => {
  const teams = "Equipos";
  //codigooo que desee

  //2. si queremos mostrar una expresión de JS en el JSX para que se muestre abrimos { y ponemos la referencia de js }
  //3. tiene que retornar JSX (JS extensión) que es como html y SOLO podemos retornar 01 ELEMENTO
  return (
    //Fragment <></>, No se renderiza
    <>
      <h1>Hola {teams}</h1>
      <h2>Como están?</h2>
      <h4>Espero que bien</h4>
    </>
  );
}

//2do se exporta por default
export default App;

