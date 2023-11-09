import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.scss";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <div className="navbar-ctn">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src="./src/assets/img/logo-geo.png" alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <img
            src={
              click ? "./src/assets/img/close.png" : "./src/assets/img/menu.png"
            }
            alt={
              click ? "./src/assets/img/close.png" : "./src/assets/img/menu.png"
            }
          />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/home"
              className="nav-links"
              onClick={() => {
                setClick(false);
              }}
            >
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/map"
              className="nav-links"
              onClick={() => {
                setClick(false);
              }}
            >
              Carte
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/memory"
              className="nav-links"
              onClick={() => {
                setClick(false);
              }}
            >
              Memory
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
