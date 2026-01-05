import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.gif";
import "../styles/navbar.css";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Ministry Logo" className="navbar-logo" />
        <span className="navbar-title">وزارة الداخلية</span>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        {isAuthenticated && (
          <li><Link to="/traffic">Traffic Reports</Link></li>
        )}

        {!isAuthenticated ? (
          <li><Link to="/login">Login</Link></li>
        ) : (
          <li>
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
