import { Link } from "react-router-dom";
import "../style/navBar.css";
import ironhacklogo from "../images/ironhacklogo.png";

function Navbar() {
  return (
    <header className="navBar">
      <Link to="/">
        <img src={ironhacklogo} alt="Ironhack Logo" />
      </Link>
      <h1>Ironhack Marketplace</h1>
    </header>
  );
}

export default Navbar;
