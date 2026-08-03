import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function AddService() {

  const navigate = useNavigate();

  const customers =
    JSON.parse(localStorage.getItem("customers")) || [];

  const vehicles =
    JSON.parse(localStorage.getItem("vehicles")) || [];

  const [service, setService] = useState({
    customer: "",
    vehicle: "",
    type: "",
    date: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const services =
      JSON.parse(localStorage.getItem("services")) || [];

    services.push(service);

    localStorage.setItem(
      "services",
      JSON.stringify(services)
    );

    alert("Service Added Successfully");
navigate("/admin/services");
  };

  return (
    <>
      <Sidebar />

      <div className="dashboard" style={{ marginLeft: "250px", padding: "30px" }}>

        <h1>Add Service</h1>

        <form onSubmit={handleSubmit} className="customer-form">

          <select name="customer" onChange={handleChange}>
            <option value="">Select Customer</option>
            {customers.map((c, index) => (
              <option key={index} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <select name="vehicle" onChange={handleChange}>
            <option value="">Select Vehicle</option>
            {vehicles.map((v, index) => (
              <option key={index} value={v.number}>
                {v.number}
              </option>
            ))}
          </select>

          <select name="type" onChange={handleChange}>
            <option value="">Select Service</option>
            <option>Oil Change</option>
            <option>Engine Repair</option>
            <option>Car Wash</option>
            <option>Brake Service</option>
            <option>Wheel Alignment</option>
            <option>Battery Change</option>
          </select>

          <input
            type="date"
            name="date"
            onChange={handleChange}
          />

          <select
            name="status"
            onChange={handleChange}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <button type="submit">
            Save Service
          </button>

        </form>

      </div>
    </>
  );
}

export default AddService;  