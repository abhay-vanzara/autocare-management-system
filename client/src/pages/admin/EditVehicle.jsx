import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function EditVehicle() {
  const { id } = useParams();
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

  useEffect(() => {
    const vehicles =
      JSON.parse(localStorage.getItem("vehicles")) || [];

    if (vehicles[id]) {
      setVehicle(vehicles[id]);
    }
  }, [id]);

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

    vehicles[id] = vehicle;

    localStorage.setItem(
      "vehicles",
      JSON.stringify(vehicles)
    );

    alert("Vehicle Updated Successfully");
    navigate("/admin/vehicles");
  };

  return (
    <>
      <Sidebar />

      <div
        className="dashboard"
        style={{ marginLeft: "250px", padding: "30px" }}
      >
        <h1>Edit Vehicle</h1>

        <form onSubmit={handleSubmit} className="customer-form">

          <input
            type="text"
            name="number"
            value={vehicle.number}
            onChange={handleChange}
            placeholder="Vehicle Number"
          />

          <select
            name="owner"
            value={vehicle.owner}
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
            value={vehicle.brand}
            onChange={handleChange}
            placeholder="Brand"
          />

          <input
            type="text"
            name="model"
            value={vehicle.model}
            onChange={handleChange}
            placeholder="Model"
          />

          <select
            name="fuel"
            value={vehicle.fuel}
            onChange={handleChange}
          >
            <option value="">Fuel Type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="CNG">CNG</option>
            <option value="Electric">Electric</option>
          </select>

          <button type="submit">
            Update Vehicle
          </button>

        </form>
      </div>
    </>
  );
}

export default EditVehicle;