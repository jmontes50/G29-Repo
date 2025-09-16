import useContadorStore from "./store/contadorStore"

const Editor = () => {

  const { incrementar, reducir } = useContadorStore();

  return (
    <div>
      <button onClick={incrementar}>Incrementar Núm.</button>
      <button onClick={reducir}>Reducir Núm.</button>
    </div>
  )
}

export default Editor
