import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("vehicles")) || [];
    setVehicles(data);
  }, []);

  const deleteVehicle = (index) => {
    const updatedVehicles = vehicles.filter((_, i) => i !== index);

    setVehicles(updatedVehicles);

    localStorage.setItem(
      "vehicles",
      JSON.stringify(updatedVehicles)
    );
  };

  return (
    <>
      <Sidebar />

      <div className="dashboard" style={{ marginLeft: "250px", padding: "30px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <h1>Vehicles</h1>

          <Link to="/admin/add-vehicle">
            <button className="add-btn">+ Add Vehicle</button>
          </Link>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Vehicle No</th>
              <th>Owner</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Fuel</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {vehicles.length > 0 ? (
              vehicles.map((vehicle, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{vehicle.number}</td>
                  <td>{vehicle.owner}</td>
                  <td>{vehicle.brand}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.fuel}</td>

                  <td>
                   <Link to={`/admin/edit-vehicle/${index}`}>
                        <button>Edit</button>
                    </Link>

                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => deleteVehicle(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No Vehicles Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Vehicles;