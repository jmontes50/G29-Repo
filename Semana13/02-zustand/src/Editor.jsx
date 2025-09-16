import useContadorStore from "./store/contadorStore"

const Editor = () => {

  const { incrementar, reducir, cambiarTexto, concatenarTexto } = useContadorStore();

  return (
    <div>
      <button onClick={incrementar}>Incrementar Núm.</button>
      <button onClick={reducir}>Reducir Núm.</button>
      <button onClick={cambiarTexto}>Cambiar TXT</button>
      <button onClick={concatenarTexto}>Concantenar TXT</button>
    </div>
  )
}

export default Editor
