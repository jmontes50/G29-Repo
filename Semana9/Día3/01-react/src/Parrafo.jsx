const Parrafo = (props) => {
  console.log(props);

  const msg = () => {
    console.log("Mensaje!!!");
  }

  return (
    <>
      <p>
        Lorem ipsum, {props.texto}
        <br />
        Numero: {props.numero}
      </p>
      {/* Eventos en JSX, usualmente a los nombres de eventos en JS se añadira el prefijo on y se usara camelCase para nombrarlos, ej "click", onClick. y se les asigna una función*/}
      <button onClick={props.accion}>Acción!!</button>
    </>
  );
};

export default Parrafo;
