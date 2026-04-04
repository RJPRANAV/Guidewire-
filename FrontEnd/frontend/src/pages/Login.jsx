import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary login (no backend yet)
    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Enter details");
    }
  };

  return (
    <main className="auth-page page-enter">
      <section className="auth-card">
        <p className="auth-kicker">GIGSENTRY</p>
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">Sign in to continue your insurance dashboard.</p>

        <form className="auth-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-link" onClick={() => navigate("/register")}>
          Don't have account? Register
        </p>
      </section>
    </main>
  );
}

export default Login;