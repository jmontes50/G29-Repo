const Boton = (props) => {

  console.log("PROPS:", props);

  return (
    <button onClick={props.manejarContador}>
      Aumentar desde botón hijo
    </button>
  )
}

export default Boton;
