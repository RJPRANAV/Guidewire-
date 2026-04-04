import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [platform, setPlatform] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    alert("Registered Successfully");
    navigate("/");
  };

  return (
    <main className="auth-page page-enter">
      <section className="auth-card">
        <p className="auth-kicker">GIGSENTRY</p>
        <h2>Create Account</h2>
        <p className="auth-subtitle">Set up your worker profile in less than a minute.</p>

        <form className="auth-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Platform (Zomato/Zepto)"
            onChange={(e) => setPlatform(e.target.value)}
            required
          />

          <button type="submit" className="auth-btn">
            Register
          </button>
        </form>

        <p className="auth-link" onClick={() => navigate("/")}>
          Already registered? Login
        </p>
      </section>
    </main>
  );
}

export default Register;