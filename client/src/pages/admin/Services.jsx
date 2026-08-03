import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function Services() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("services")) || [];
    setServices(data);
  }, []);

  const deleteService = (index) => {
    const updated = services.filter((_, i) => i !== index);

    setServices(updated);

    localStorage.setItem(
      "services",
      JSON.stringify(updated)
    );
  };

  return (
    <>
      <Sidebar />

      <div
        className="dashboard"
        style={{ marginLeft: "250px", padding: "30px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <h1>Services</h1>

          <Link to="/admin/add-service">
            <button className="add-btn">
              + Add Service
            </button>
          </Link>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Vehicle</th>
              <th>Service</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {services.map((service,index)=>(

              <tr key={index}>
                <td>{index+1}</td>
                <td>{service.customer}</td>
                <td>{service.vehicle}</td>
                <td>{service.type}</td>
                <td>{service.date}</td>
                <td>{service.status}</td>

                <td>

                  <Link to={`/admin/edit-service/${index}`}>
                    <button>Edit</button>
                  </Link>

                  <button
                    style={{marginLeft:"10px"}}
                    onClick={()=>deleteService(index)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </>
  );
}

export default Services;