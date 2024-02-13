import "../style/sideBar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sideBar">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/"> Home Page </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
