import "/src/style/navBar.css";
import ironhacklogo from "../images/ironhacklogo.png";

function Navbar() {
  return (
    <div className="navBar">
      <img src={ironhacklogo} alt="Ironhack Logo" />
      <h1>Ironhack Market</h1>
    </div>
  );
}

export default Navbar;
