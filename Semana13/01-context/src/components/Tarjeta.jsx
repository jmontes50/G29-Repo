import { useContext } from "react";
// import { Conta}

const Tarjeta = (props) => {
  return (
    <div>
      <h2>
        Contador es:
        {props.contador}
      </h2>
      {/* <Boton contador={props.contador} /> */}
    </div>
  )
}

export default Tarjeta
