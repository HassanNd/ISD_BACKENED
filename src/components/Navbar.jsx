import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h2>وزارة الداخلية</h2>

<div className="links">
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>

  {isAuthenticated && <Link to="/traffic">Traffic Report</Link>}

  {isAuthenticated ? (
    <button onClick={logout}>Logout</button>
  ) : (
    <Link to="/login">Login</Link>
  )}
</div>

    </nav>
  );
}

export default Navbar;
