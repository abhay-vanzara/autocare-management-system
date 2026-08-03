import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function EditService() {

  const { id } = useParams();
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
    status: "",
  });

  useEffect(() => {
    const services =
      JSON.parse(localStorage.getItem("services")) || [];

    if (services[id]) {
      setService(services[id]);
    }
  }, [id]);

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

    services[id] = service;

    localStorage.setItem(
      "services",
      JSON.stringify(services)
    );

    alert("Service Updated Successfully");
    navigate("/admin/services");
  };

  return (
    <>
      <Sidebar />

      <div
        className="dashboard"
        style={{ marginLeft: "250px", padding: "30px" }}
      >
        <h1>Edit Service</h1>

        <form onSubmit={handleSubmit} className="customer-form">

          <select
            name="customer"
            value={service.customer}
            onChange={handleChange}
          >
            <option value="">Select Customer</option>

            {customers.map((c, index) => (
              <option key={index} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            name="vehicle"
            value={service.vehicle}
            onChange={handleChange}
          >
            <option value="">Select Vehicle</option>

            {vehicles.map((v, index) => (
              <option key={index} value={v.number}>
                {v.number}
              </option>
            ))}
          </select>

          <select
            name="type"
            value={service.type}
            onChange={handleChange}
          >
            <option value="">Select Service</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Engine Repair">Engine Repair</option>
            <option value="Car Wash">Car Wash</option>
            <option value="Brake Service">Brake Service</option>
            <option value="Wheel Alignment">Wheel Alignment</option>
            <option value="Battery Change">Battery Change</option>
          </select>

          <input
            type="date"
            name="date"
            value={service.date}
            onChange={handleChange}
          />

          <select
            name="status"
            value={service.status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <button type="submit">
            Update Service
          </button>

        </form>
      </div>
    </>
  );
}

export default EditService;