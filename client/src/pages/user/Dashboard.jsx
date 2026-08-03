import { Link } from "react-router-dom";
import {
  FaCar,
  FaTools,
  FaClipboardList,
  FaUserCircle,
} from "react-icons/fa";

import UserSidebar from "../../components/UserSidebar";
import "../../styles/UserDashboard.css";

function Dashboard() {

  const user =
    JSON.parse(localStorage.getItem("currentUser"));

  const vehicles =
    JSON.parse(localStorage.getItem("vehicles")) || [];

  const services =
    JSON.parse(localStorage.getItem("services")) || [];

  const myVehicle =
    vehicles.find(
      (v) => v.owner === user?.name
    );

  const myService =
    services
      .filter(
        (s) => s.customer === user?.name
      )
      .slice(-1)[0];

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12)
    greeting = "Good Morning";

  else if (hour < 17)
    greeting = "Good Afternoon";

  return (

    <>
    <UserSidebar />

<div className="user-dashboard">

  <div className="user-header">

    <h1>{greeting}, {user?.name} 👋</h1>

    <p>Manage your vehicles and service requests.</p>

  </div>

  <div className="user-cards">

    <Link to="/user/my-vehicles">
      <div className="user-card">
        <FaCar className="user-icon" />
        <h3>My Vehicles</h3>
      </div>
    </Link>

    <Link to="/user/book-service">
      <div className="user-card">
        <FaTools className="user-icon" />
        <h3>Book Service</h3>
      </div>
    </Link>

    <Link to="/user/my-services">
      <div className="user-card">
        <FaClipboardList className="user-icon" />
        <h3>My Services</h3>
      </div>
    </Link>

    <Link to="/user/profile">
      <div className="user-card">
        <FaUserCircle className="user-icon" />
        <h3>My Profile</h3>
      </div>
    </Link>

  </div>

  <div className="info-box">

    <h2>My Vehicle</h2>

    <p><b>Vehicle:</b> {myVehicle?.number || "Not Added"}</p>

    <p><b>Brand:</b> {myVehicle?.brand || "-"}</p>

    <p><b>Model:</b> {myVehicle?.model || "-"}</p>

    <p><b>Fuel:</b> {myVehicle?.fuel || "-"}</p>

  </div>

  <div className="info-box">

    <h2>Latest Service</h2>

    <p><b>Service:</b> {myService?.type || "-"}</p>

    <p><b>Date:</b> {myService?.date || "-"}</p>

    <p><b>Status:</b> {myService?.status || "-"}</p>

  </div>

</div>

    </>

  );

}

export default Dashboard;