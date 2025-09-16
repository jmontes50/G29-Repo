import useContadorStore from "./store/contadorStore"

const Observador = () => {
  const { numero, texto } = useContadorStore();

  return (
    <div>
      <h2>{ texto }</h2>
      <h4>Contador es: { numero }</h4>
    </div>
  )
}

export default Observador
