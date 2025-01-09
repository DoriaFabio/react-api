import { NavLink } from "react-router-dom";

function HeaderComponent() {
  return (
    <header className="p-4 d-flex justify-content-between">
      <h1 className="text-center">Il mio blog</h1>
      <ul className="d-flex list-unstyled">
        <li className="px-2">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="px-2">
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li className="px-2">
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li className="px-2">
          <NavLink to="/posts">Elenco post</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default HeaderComponent;