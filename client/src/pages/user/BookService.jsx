import { useState, useEffect } from "react";
import UserSidebar from "../../components/UserSidebar";

function BookService() {

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

  const [vehicles, setVehicles] = useState([]);

  const [service, setService] = useState({
    customer: currentUser?.name || "",
    vehicle: "",
    type: "",
    problem: "",
    date: "",
    status: "Pending",
  });

  useEffect(() => {
    const allVehicles =
      JSON.parse(localStorage.getItem("vehicles")) || [];

    const myVehicles = allVehicles.filter(
      (vehicle) => vehicle.owner === currentUser.name
    );

    setVehicles(myVehicles);

  }, []);

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

    alert("Service Request Submitted");

    setService({
      customer: currentUser.name,
      vehicle: "",
      type: "",
      problem: "",
      date: "",
      status: "Pending",
    });
  };

  return (
    <>
      <UserSidebar />

      <div
        className="dashboard"
        style={{ marginLeft: "250px", padding: "30px" }}
      >

        <h1>Book Service</h1>

        <form onSubmit={handleSubmit} className="customer-form">

          <input
            type="text"
            value={currentUser.name}
            readOnly
          />

          <select
            name="vehicle"
            value={service.vehicle}
            onChange={handleChange}
          >
            <option value="">Select Vehicle</option>

            {vehicles.map((vehicle, index) => (
              <option
                key={index}
                value={vehicle.number}
              >
                {vehicle.number}
              </option>
            ))}

          </select>

          <select
            name="type"
            value={service.type}
            onChange={handleChange}
          >
            <option value="">Select Service</option>
            <option>Oil Change</option>
            <option>Engine Repair</option>
            <option>Brake Service</option>
            <option>Battery Change</option>
            <option>Wheel Alignment</option>
            <option>General Service</option>
          </select>

          <textarea
            name="problem"
            placeholder="Describe Problem"
            value={service.problem}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            value={service.date}
            onChange={handleChange}
          />

          <button type="submit">
            Book Service
          </button>

        </form>

      </div>
    </>
  );
}

export default BookService;