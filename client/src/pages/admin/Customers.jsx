import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("customers")) || [];
    setCustomers(data);
  }, []);

  const deleteCustomer = (index) => {
    const updatedCustomers = customers.filter((_, i) => i !== index);

    setCustomers(updatedCustomers);

    localStorage.setItem(
      "customers",
      JSON.stringify(updatedCustomers)
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
          <h1>Customers</h1>

          <Link to="/admin/add-customer">
            <button className="add-btn">+ Add Customer</button>
          </Link>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {customers.length > 0 ? (
              customers.map((customer, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{customer.name}</td>
                  <td>{customer.mobile}</td>
                  <td>{customer.email}</td>
                  <td>{customer.address}</td>
                  <td>
                    <Link to={`/admin/edit-customer/${index}`}>
                         <button>Edit</button>
                    </Link>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => deleteCustomer(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No Customers Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Customers;