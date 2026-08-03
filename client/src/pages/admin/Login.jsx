import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "kunalvanzara119@gmail.com" &&
      password === "123456"
    ) {
      localStorage.setItem("isLogin", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-page">

      <div className="login-overlay">

        <div className="login-card">

          <h1>🔧 AutoCare</h1>

          <h2>Admin Login</h2>

          <p>
            Welcome Back Administrator
          </p>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              placeholder="📧 Enter Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="🔒 Enter Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />

            <button type="submit">
              Login
            </button>

          </form>

          <div className="login-links">

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