import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function EditCustomer() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [customer, setCustomer] = useState({
        name: "",
        mobile: "",
        email: "",
        address: "",
    });

    useEffect(() => {
        const customers =
            JSON.parse(localStorage.getItem("customers")) || [];

        setCustomer(customers[id]);
    }, [id]);

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const customers =
            JSON.parse(localStorage.getItem("customers")) || [];

        customers[id] = customer;

        localStorage.setItem(
            "customers",
            JSON.stringify(customers)
        );

        alert("Customer Updated Successfully");

        navigate("/admin/customers");
    };

    return (
        <>
            <Sidebar />

            <div
                className="dashboard"
                style={{ marginLeft: "250px", padding: "30px" }}
            >
                <h1>Edit Customer</h1>

                <form onSubmit={handleSubmit} className="customer-form">

                    <input
                        type="text"
                        name="name"
                        value={customer.name}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="mobile"
                        value={customer.mobile}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                    />

                    <textarea
                        name="address"
                        value={customer.address}
                        onChange={handleChange}
                    />

                    <button type="submit">
                        Update Customer
                    </button>

                </form>
            </div>
        </>
    );
}

export default EditCustomer;