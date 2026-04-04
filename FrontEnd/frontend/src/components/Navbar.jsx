import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar page-enter">
      <div className="navbar-brand">
        <span className="brand-dot" aria-hidden="true" />
        <h2>GIGSENTRY</h2>
      </div>

      <div className="navbar-links">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/policy">Policy</NavLink>
        <NavLink to="/claims">Claims</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </div>

      <button className="logout-btn" onClick={() => navigate("/")}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
