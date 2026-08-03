import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaCar,
  FaTools,
  FaCheckCircle,
  FaUserPlus,
  FaCarSide,
  FaClipboardList,
  FaSearch,
} from "react-icons/fa";

import Sidebar from "../../components/Sidebar";
import StatsChart from "../../components/StatsChart";
import "../../styles/Dashboard.css";

function Dashboard() {
  const [customers, setCustomers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  }
  useEffect(() => {
    setCustomers(
      JSON.parse(localStorage.getItem("customers")) || []
    );

    setVehicles(
      JSON.parse(localStorage.getItem("vehicles")) || []
    );

    setServices(
      JSON.parse(localStorage.getItem("services")) || []
    );
  }, []);

  const completedServices = services.filter(
    (item) => item.status === "Completed"
  ).length;

  const pendingServices =
    services.length - completedServices;

  const filteredServices = services.filter((service) =>
    service.customer
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <Sidebar />

      <div className="dashboard">

        {/* Header */}

        <div className="dashboard-header">

          <div>

            <h1>Dashboard</h1>

            <p>
              {greeting}, Admin 👋
            </p>

          </div>

          <div className="date-box">

            <h3>{new Date().toLocaleDateString()}</h3>

            <p>{new Date().toLocaleTimeString()}</p>

          </div>

        </div>

        {/* Cards */}

        <div className="cards">

          <div className="card blue">

            <FaUsers className="card-icon" />

            <h2>{customers.length}</h2>

            <p>Total Customers</p>

          </div>

          <div className="card green">

            <FaCar className="card-icon" />

            <h2>{vehicles.length}</h2>

            <p>Total Vehicles</p>

          </div>

          <div className="card orange">

            <FaTools className="card-icon" />

            <h2>{pendingServices}</h2>

            <p>Pending Services</p>

          </div>

          <div className="card purple">

            <FaCheckCircle className="card-icon" />

            <h2>{completedServices}</h2>

            <p>Completed Services</p>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="quick-actions">

          <h2>Quick Actions</h2>

          <div className="action-buttons">

            <Link to="/admin/add-customer">
              <button>
                <FaUserPlus /> Add Customer
              </button>
            </Link>

            <Link to="/admin/add-vehicle">
              <button>
                <FaCarSide /> Add Vehicle
              </button>
            </Link>

            <Link to="/admin/add-service">
              <button>
                <FaClipboardList /> Add Service
              </button>
            </Link>

          </div>

        </div>

        {/* Search */}

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search Customer..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        {/* Recent Services */}
        <div className="chart-box">

          <h2>Workshop Statistics</h2>

          <StatsChart
            customers={customers.length}
            vehicles={vehicles.length}
            pending={pendingServices}
            completed={completedServices}
          />

        </div>
        <div className="table-section">

          <h2>Recent Services</h2>

          <table>

            <thead>

              <tr>

                <th>Customer</th>

                <th>Vehicle</th>

                <th>Service</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {filteredServices.length > 0 ? (

                filteredServices
                  .slice()
                  .reverse()
                  .map((service, index) => (

                    <tr key={index}>

                      <td>{service.customer}</td>

                      <td>{service.vehicle}</td>

                      <td>{service.type}</td>

                      <td>{service.status}</td>

                    </tr>

                  ))

              ) : (

                <tr>

                  <td colSpan="4">

                    No Data Found

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

        {/* Recent Activity */}

        <div className="activity">

          <h2>Recent Activity</h2>

          <ul>

            <li>✅ Customer records updated.</li>

            <li>🚗 Vehicle data managed.</li>

            <li>🔧 Service requests processed.</li>

            <li>📋 Dashboard synchronized successfully.</li>

          </ul>

        </div>

      </div>

    </>
  );
}

export default Dashboard;