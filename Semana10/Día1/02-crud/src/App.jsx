import { BrowserRouter, Routes, Route } from "react-router-dom";

//rafce snippet react
import ProductsView from "./views/ProductsView";

const App = () => {
  return (
    // <div>App
    //   <ProductsView />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
