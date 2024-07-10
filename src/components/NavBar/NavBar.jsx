import { React, useState } from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const loction = useLocation();
  const isHomepage = loction.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo">MuscleMentor</div>
      <div className="ham-menu">
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`menu-content ${menuOpen ? "open" : ""}`}>
          {isHomepage ? null : (
            <li>
              <Link to="/" className="rounded-button">
                Home
              </Link>
            </li>
          )}
          <li>
            <Link to="/about" className="rounded-button">
              About
            </Link>
          </li>
          <li>
            <Link to="/exercises" className="rounded-button">
              Exercise
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
