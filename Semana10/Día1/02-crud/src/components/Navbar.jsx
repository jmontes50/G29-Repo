//Link es el equivalente a hipervinculos pero en react manteniendo la SPA
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        {/* <a className="btn btn-ghost text-xl">Admin</a> */}
        <Link className="btn btn-ghost text-xl" to="/">
          Admin
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            {/* <a href="/crear">Link</a> */}
            <Link to="/crear">Crear Producto</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
