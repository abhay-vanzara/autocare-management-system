import {
  FaTachometerAlt,
  FaUsers,
  FaCar,
  FaTools,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <div className="sidebar">

      <h2>AutoCare</h2>

      <ul>

        <Link to="/admin/dashboard" className="menu-link">
          <li>
            <FaTachometerAlt /> Dashboard
          </li>
        </Link>

        <Link to="/admin/customers" className="menu-link">
          <li>
            <FaUsers /> Customers
          </li>
        </Link>

        <Link to="/admin/vehicles" className="menu-link">
          <li>
            <FaCar /> Vehicles
          </li>
        </Link>

        <Link to="/admin/services" className="menu-link">
          <li>
            <FaTools /> Services
          </li>
        </Link>

        <li onClick={logout}>
          <FaSignOutAlt /> Logout
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;