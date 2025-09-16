import { useContext } from "react";
import { ContadorContext } from "../context/ContextContador";

const Tarjeta = () => {
  const { contador } = useContext(ContadorContext);
  console.log(contador)


  return (
    <div>
      <h2>
        Contador es:
        {/* {props.contador} */}
        {contador}
      </h2>
      {/* <Boton contador={props.contador} /> */}
    </div>
  )
}

export default Tarjeta
