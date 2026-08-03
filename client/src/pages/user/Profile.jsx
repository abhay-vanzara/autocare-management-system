import UserSidebar from "../../components/UserSidebar";

function Profile() {

  const user =
    JSON.parse(localStorage.getItem("currentUser"));

  return (
    <>
      <UserSidebar />

      <div
        className="dashboard"
        style={{ marginLeft: "250px", padding: "30px" }}
      >

        <h1>My Profile</h1>

        <div className="customer-form">

          <input
            type="text"
            value={user?.name || ""}
            readOnly
          />

          <input
            type="text"
            value={user?.mobile || ""}
            readOnly
          />

          <input
            type="email"
            value={user?.email || ""}
            readOnly
          />

        </div>

      </div>
    </>
  );
}

export default Profile;