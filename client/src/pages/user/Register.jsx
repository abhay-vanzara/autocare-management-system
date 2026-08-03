import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Login.css";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    let users =
      JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(
      (u) => u.email === user.email
    );

    if (exists) {
      alert("Email already registered");
      return;
    }

    users.push({
      name: user.name,
      mobile: user.mobile,
      email: user.email,
      password: user.password,
    });

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Registration Successful");

    navigate("/user/login");
  };

  return (
    <div className="login-page">

      <div className="login-overlay">

        <div className="login-card">

          <h1>🚗 AutoCare</h1>

          <h2>Create Account</h2>

          <p>
            Register to book and manage your vehicle services.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="👤 Full Name"
              value={user.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="mobile"
              placeholder="📱 Mobile Number"
              value={user.mobile}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="📧 Email Address"
              value={user.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="🔒 Password"
              value={user.password}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="🔐 Confirm Password"
              value={user.confirmPassword}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="customer-login-btn"
            >
              Register
            </button>

          </form>

          <div className="login-links">

            <Link to="/user/login">
              Already have an account?
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

export default Register;