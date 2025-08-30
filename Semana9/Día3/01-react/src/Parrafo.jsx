const Parrafo = (props) => {
  console.log(props)

  return <p>
    Lorem ipsum, {props.texto}
    <br />
    Numero: {props.numero}
  </p>
}

export default Parrafo;
