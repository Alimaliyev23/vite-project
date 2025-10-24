import React from "react";
import AdminSongsManagement from "./AdminSongsManagement";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "./redux/authSlice";

const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="admin-router-wrapper">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <Link to="/" className="toggle-view-btn">
          ← Mahnı Siyahısına Qayıt
        </Link>

        <button onClick={handleLogout} className="btn-logout">
          Çıxış (Logout)
        </button>
      </div>

      <AdminSongsManagement />
    </div>
  );
};

export default AdminPage;
