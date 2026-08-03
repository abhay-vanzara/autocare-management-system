import {
  FaHome,
  FaCar,
  FaTools,
  FaClipboardList,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import "./Sidebar.css";

function UserSidebar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isUserLogin");
    localStorage.removeItem("currentUser");

    navigate("/user/login");
  };

  return (
    <div className="sidebar">

      <h2>AutoCare</h2>

      <ul>

        <Link to="/user/dashboard" className="menu-link">
          <li>
            <FaHome /> Dashboard
          </li>
        </Link>

        <Link to="/user/my-vehicles" className="menu-link">
          <li>
            <FaCar /> My Vehicles
          </li>
        </Link>

        <Link to="/user/book-service" className="menu-link">
          <li>
            <FaTools /> Book Service
          </li>
        </Link>

        <Link to="/user/my-services" className="menu-link">
          <li>
            <FaClipboardList /> My Services
          </li>
        </Link>

        <Link to="/user/profile" className="menu-link">
          <li>
            <FaUser /> Profile
          </li>
        </Link>

        <li onClick={logout}>
          <FaSignOutAlt /> Logout
        </li>

      </ul>

    </div>
  );
}

export default UserSidebar;