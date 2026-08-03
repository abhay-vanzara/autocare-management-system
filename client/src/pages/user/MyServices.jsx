import { useEffect, useState } from "react";
import UserSidebar from "../../components/UserSidebar";

function MyServices() {

  const [services, setServices] = useState([]);

  useEffect(() => {

    const currentUser =
      JSON.parse(localStorage.getItem("currentUser"));

    const allServices =
      JSON.parse(localStorage.getItem("services")) || [];

    const myServices = allServices.filter(
      (service) => service.customer === currentUser.name
    );

    setServices(myServices);

  }, []);

  return (
    <>
      <UserSidebar />

      <div
        className="dashboard"
        style={{ marginLeft: "250px", padding: "30px" }}
      >

        <h1>My Services</h1>

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Vehicle</th>
              <th>Service</th>
              <th>Problem</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {services.length > 0 ? (

              services.map((service, index) => (

                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{service.vehicle}</td>
                  <td>{service.type}</td>
                  <td>{service.problem}</td>
                  <td>{service.date}</td>
                  <td>{service.status}</td>
                </tr>

              ))

            ) : (

              <tr>
                <td colSpan="6">
                  No Service Requests Found
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>
    </>
  );
}

export default MyServices;