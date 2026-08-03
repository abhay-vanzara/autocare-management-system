import { useEffect, useState } from "react";
import UserSidebar from "../../components/UserSidebar";

function MyVehicles() {

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const currentUser =
      JSON.parse(localStorage.getItem("currentUser"));

    const allVehicles =
      JSON.parse(localStorage.getItem("vehicles")) || [];

    const myVehicles = allVehicles.filter(
      (vehicle) => vehicle.owner === currentUser.name
    );

    setVehicles(myVehicles);

  }, []);

  return (
    <>
      <UserSidebar />

      <div
        className="dashboard"
        style={{ marginLeft: "250px", padding: "30px" }}
      >

        <h1>My Vehicles</h1>

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Vehicle No</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Fuel</th>
            </tr>
          </thead>

          <tbody>

            {vehicles.length > 0 ? (

              vehicles.map((vehicle, index) => (

                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{vehicle.number}</td>
                  <td>{vehicle.brand}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.fuel}</td>
                </tr>

              ))

            ) : (

              <tr>
                <td colSpan="5">
                  No Vehicle Found
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>
    </>
  );
}

export default MyVehicles;