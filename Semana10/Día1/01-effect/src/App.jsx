import { useState } from "react";

const App = () => {
  const [contador, setContador] = useState(1);

  console.log(contador)
  console.log("setContador", setContador)

  return (
    <>
      <h1>App: {contador}</h1>
    </>
  )
}

export default App;
