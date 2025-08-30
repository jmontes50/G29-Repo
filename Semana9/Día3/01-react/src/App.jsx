//En los import que sean de archivos .js o .jsx No es necesario agregar la extensión a la ruta
import Parrafo from "./Parrafo";

//1. El nombre de los componentes siempre tiene que comenzar con mayuscula
const App = () => {
  const teams = "Equipos";
  //codigooo que desee
  const texto1 = "Concurso de desayunos";
  const texto2 = "Latinoamerica";

  const numero = 1000;

  const fAlerta = () => alert("Soy una alerta!");

  //2. si queremos mostrar una expresión de JS en el JSX para que se muestre abrimos { y ponemos la referencia de js }
  //3. tiene que retornar JSX (JS extensión) que es como html y SOLO podemos retornar 01 ELEMENTO
  return (
    //Fragment <></>, No se renderiza, no le podemos añadir cosas visuales
    <>
      {/* Si deseamos incluir expresiones de JS abrimos ñ{} en el JSX */}
      <h1>Hola {teams}</h1>
      {console.log("Estoy dentro del JSX")}
      <h2>Como están? {10 + 10}</h2>
      <h4>Espero que bien</h4>
      <hr/>
      <section>
        {/* 4. Todo el jsx ya sea html u otros componente, TIENEN QUE TENER ETIQUETA DE CIERRE Ó AUTOCIERRE */}
        {/* los props que se añaden com atributos personalizados en el JSX, llegan al componente de destino como un argumento en forma de objeto para poder ser utilizados */}
        <Parrafo
          texto={texto1}
          fecha="29/08"
          numero={numero}
          accion={fAlerta}
        />
        <Parrafo
          texto="Pan con chicharron"
          numero={200}
        />
        <Parrafo texto={texto2} numero={500}/>
      </section>
    </>
  );
}

//2do se exporta por default
export default App;

