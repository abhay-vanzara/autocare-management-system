import { Routes, Route, Navigate } from "react-router-dom";

// Home Page
import Home from "./pages/Home";

// Admin Pages
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Customers from "./pages/admin/Customers";
import AddCustomer from "./pages/admin/AddCustomer";
import EditCustomer from "./pages/admin/EditCustomer";
import Vehicles from "./pages/admin/Vehicles";
import AddVehicle from "./pages/admin/AddVehicle";
import EditVehicle from "./pages/admin/EditVehicle";
import Services from "./pages/admin/Services";
import AddService from "./pages/admin/AddService";
import EditService from "./pages/admin/EditService";

// User Pages
import UserLogin from "./pages/user/Login";
import UserRegister from "./pages/user/Register";
import UserDashboard from "./pages/user/Dashboard";
import MyVehicles from "./pages/user/MyVehicles";
import BookService from "./pages/user/BookService";
import MyServices from "./pages/user/MyServices";
import Profile from "./pages/user/Profile";

function App() {

  const isLogin = localStorage.getItem("isLogin");
  const isUserLogin = localStorage.getItem("isUserLogin");

  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* ================= ADMIN ================= */}

      <Route path="/admin/login" element={<Login />} />

      <Route
        path="/admin/dashboard"
        element={isLogin ? <Dashboard /> : <Navigate to="/admin/login" />}
      />

      <Route
        path="/admin/customers"
        element={isLogin ? <Customers /> : <Navigate to="/admin/login" />}
      />

      <Route
        path="/admin/add-customer"
        element={isLogin ? <AddCustomer /> : <Navigate to="/admin/login" />}
      />

      <Route
        path="/admin/edit-customer/:id"
        element={isLogin ? <EditCustomer /> : <Navigate to="/admin/login" />}
      />

      <Route
        path="/admin/vehicles"
        element={isLogin ? <Vehicles /> : <Navigate to="/admin/login" />}
      />

      <Route
        path="/admin/add-vehicle"
        element={isLogin ? <AddVehicle /> : <Navigate to="/admin/login" />}
      />

      <Route
        path="/admin/edit-vehicle/:id"
        element={isLogin ? <EditVehicle /> : <Navigate to="/admin/login" />}
      />

      <Route
        path="/admin/services"
        element={isLogin ? <Services /> : <Navigate to="/admin/login" />}
      />

      <Route
        path="/admin/add-service"
        element={isLogin ? <AddService /> : <Navigate to="/admin/login" />}
      />

      <Route
        path="/admin/edit-service/:id"
        element={isLogin ? <EditService /> : <Navigate to="/admin/login" />}
      />

      {/* ================= USER ================= */}

      <Route path="/user/login" element={<UserLogin />} />

      <Route path="/user/register" element={<UserRegister />} />

      <Route
        path="/user/dashboard"
        element={isUserLogin ? <UserDashboard /> : <Navigate to="/user/login" />}
      />

      <Route
        path="/user/my-vehicles"
        element={isUserLogin ? <MyVehicles /> : <Navigate to="/user/login" />}
      />

      <Route
        path="/user/book-service"
        element={isUserLogin ? <BookService /> : <Navigate to="/user/login" />}
      />

      <Route
        path="/user/my-services"
        element={isUserLogin ? <MyServices /> : <Navigate to="/user/login" />}
      />

      <Route
        path="/user/profile"
        element={isUserLogin ? <Profile /> : <Navigate to="/user/login" />}
      />

      {/* Invalid Route */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}

export default App;