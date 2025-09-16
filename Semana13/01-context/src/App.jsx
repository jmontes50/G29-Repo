import { useState } from "react";
import "./App.css";
import { ContextContadorProvider } from "./context/ContextContador";
import Tarjeta from "./components/Tarjeta";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <ContextContadorProvider>
      <div className="card">
        <Tarjeta />
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
    </ContextContadorProvider>
  );
}

export default App;
