import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProductView from "./views/CreateProductView";
import Navbar from "./components/Navbar";
import EditProductView from "./views/EditProductView";

//rafce snippet react
import ProductsView from "./views/ProductsView";

const App = () => {
  return (
    // <div>App
    //   <ProductsView />
    // </div>
    <BrowserRouter>
      <div className="max-w-[1280px] mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsView />} />
          <Route path="/crear" element={<CreateProductView />} />
          {/* en una ruta podemos indicar un parámetro dinámico con : seguido por el nombre del parámetro ej, path="/ruta/:nombre_param" */}
          <Route path="/editar/:id" element={<EditProductView />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
