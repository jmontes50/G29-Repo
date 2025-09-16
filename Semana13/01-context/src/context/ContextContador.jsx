import { useState, createContext } from "react"

const ContadorContext = createContext();
//Un context va a tener 2 cosas un provider y un consumer


const ContextContadorProvider = (props) => {
  const [contador, setContador] = useState(0)



  // el objeto que esta dentro de value, indica que se puede compartir
  return <ContadorContext.Provider value={{ contador, setContador }}>
    <h1>Context!!</h1>
    {props.children}
  </ContadorContext.Provider>
}

export {
  ContextContadorProvider,
  ContadorContext
}
