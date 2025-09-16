import useContadorStore from "./store/contadorStore"

const Observador = () => {
  const obj = useContadorStore();
  console.log(obj)

  return (
    <div>Observador</div>
  )
}

export default Observador
