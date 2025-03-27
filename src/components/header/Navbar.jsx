import { NavLink } from "react-router";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-secondary-blue text-coconut-cream py-4 px-2">
      <ul className="flex flex-wrap flex-column sm:flex-row justify-center items-center gap-4">
        <li>
          <NavLink className="nav-link-item" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link-item" to="about">
            आमच्याबद्दल
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link-item" to="/sections/primary">
            प्राथमिक विभाग
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link-item" to="/sections/secondary">
            माध्यमिक विभाग
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link-item" to="/sections/higher-secondary">
            उच्च माध्यमिक विभाग
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link-item" to="/messages/founder">
            संस्थापकांचा संदेश
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link-item" to="/messages/secretary">
            सचिवांचा संदेश
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link-item" to="messages/director">
            संचालकांचा संदेश
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link-item" to="/contact">
            संपर्क करा
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link-item" to="/gallery">
            Gallery
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
