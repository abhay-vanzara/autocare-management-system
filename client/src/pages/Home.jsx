import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">

      <div className="overlay">

        <div className="home-card">

          <h3>WELCOME TO</h3>

          <h1>AutoCare</h1>

          <h2>Workshop Management System</h2>

          <p>
            Professional Workshop Management Solution for
            Customers, Vehicles and Services.
          </p>

          <div className="home-buttons">

            <Link to="/admin/login">
              <button className="admin-btn">
                Admin Login
              </button>
            </Link>

            <Link to="/user/login">
              <button className="customer-btn">
                Customer Login
              </button>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;