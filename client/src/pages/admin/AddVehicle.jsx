import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function AddVehicle() {

  const navigate = useNavigate();

  const customers =
    JSON.parse(localStorage.getItem("customers")) || [];

  const [vehicle, setVehicle] = useState({
    number: "",
    owner: "",
    brand: "",
    model: "",
    fuel: "",
  });

  const handleChange = (e) => {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const vehicles =
      JSON.parse(localStorage.getItem("vehicles")) || [];

    vehicles.push(vehicle);

    localStorage.setItem(
      "vehicles",
      JSON.stringify(vehicles)
    );

    alert("Vehicle Added Successfully");

    navigate("/admin/vehicles");
  };

  return (
    <>
      <Sidebar />

      <div
        className="dashboard"
        style={{ marginLeft: "250px", padding: "30px" }}
      >
        <h1>Add Vehicle</h1>

        <form onSubmit={handleSubmit} className="customer-form">

          <input
            type="text"
            name="number"
            placeholder="Vehicle Number"
            onChange={handleChange}
          />

          <select
            name="owner"
            onChange={handleChange}
          >
            <option value="">Select Owner</option>

            {customers.map((customer, index) => (
              <option key={index} value={customer.name}>
                {customer.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="brand"
            placeholder="Brand"
            onChange={handleChange}
          />

          <input
            type="text"
            name="model"
            placeholder="Model"
            onChange={handleChange}
          />

          <select
            name="fuel"
            onChange={handleChange}
          >
            <option value="">Fuel Type</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>CNG</option>
            <option>Electric</option>
          </select>

          <button type="submit">
            Save Vehicle
          </button>

        </form>

      </div>
    </>
  );
}

export default AddVehicle;