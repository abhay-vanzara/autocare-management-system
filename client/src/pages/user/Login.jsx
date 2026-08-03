import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (user) {

      localStorage.setItem("isUserLogin", "true");
      localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
      );

      alert("Login Successful");

      navigate("/user/dashboard");

    } else {

      alert("Invalid Email or Password");

    }
  };

  return (
    <div className="login-page">

      <div className="login-overlay">

        <div className="login-card">

          <h1>🚗 AutoCare</h1>

          <h2>Customer Login</h2>

          <p>
            Welcome Back! Login to manage your vehicle services.
          </p>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              placeholder="📧 Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="🔒 Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="customer-login-btn"
            >
              Login
            </button>

          </form>

          <div className="login-links">

            <Link to="/user/register">
              Create New Account
            </Link>
      
            <Link to="/">
              ← Back to Home
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;