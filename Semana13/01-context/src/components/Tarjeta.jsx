import { useContext } from "react";
import { ContadorContext } from "../context/ContextContador";

const Tarjeta = () => {
  const { contador, setContador } = useContext(ContadorContext);
  console.log(contador)


  return (
    <div>
      <h2>
        Contador es:
        {/* {props.contador} */}
        {contador}
      </h2>
      <button onClick={() => setContador(contador + 10)}>
        Aumentar
      </button>
      {/* <Boton contador={props.contador} /> */}
    </div>
  )
}

export default Tarjeta
