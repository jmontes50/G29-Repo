import { useState } from "react";
import "./App.css";
import Tarjeta from "./components/Tarjeta";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <Tarjeta contador={count} />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
