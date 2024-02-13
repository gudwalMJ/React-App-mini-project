import { Link } from "react-router-dom";
// Import Logo //
import ironhacklogo from "../images/ironhacklogo.png";
// Import Styles //
import "../style/navBar.css";

function Navbar() {
  return (
    <header className="navBar">
      <Link to="/">
        <img src={ironhacklogo} alt="Ironhack Logo" />
      </Link>

      <h1>Ironhack Marketplace</h1>
      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Navbar;
