import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function AddCustomer() {

  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let customers =
      JSON.parse(localStorage.getItem("customers")) || [];

    customers.push(customer);

    localStorage.setItem(
      "customers",
      JSON.stringify(customers)
    );

    alert("Customer Added Successfully");
    navigate("/admin/customers");
  };

  return (
    <>
      <Sidebar />

      <div
        className="dashboard"
        style={{ marginLeft: "250px", padding: "30px" }}
      >
        <h1>Add Customer</h1>

        <form onSubmit={handleSubmit} className="customer-form">

          <input
            type="text"
            name="name"
            placeholder="Customer Name"
            onChange={handleChange}
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Address"
            onChange={handleChange}
          ></textarea>

          <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit">Save Customer</button>

            <button
              type="button"
              onClick={() => navigate("/admin/customers")}
              style={{ background: "#6c757d" }}
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </>
  );
}

export default AddCustomer;