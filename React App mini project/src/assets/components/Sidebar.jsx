import "/src/style/sideBar.css";

function Sidebar() {
  return (
    <div className="sideBar">
      <nav>
        <ul>
          <li>
            <a href="#">Home Page</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
