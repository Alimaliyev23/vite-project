import React from "react";
import AdminSongsManagement from "./AdminSongsManagement";
import { Link } from "react-router-dom";
const AdminPage = () => {
  return (
    <div className="admin-router-wrapper">
      <Link to="/" className="toggle-view-btn">
        ← Mahnı Siyahısına Qayıt
      </Link>
      <AdminSongsManagement />
    </div>
  );
};

export default AdminPage;
