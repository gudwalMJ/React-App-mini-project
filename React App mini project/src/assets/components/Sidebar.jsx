// Sidebar.jsx
import "/src/style/sideBar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sideBar">
      <ul>
        {/* <li>
          <Link to="/">Home Page</Link>
        </li>*/}
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
