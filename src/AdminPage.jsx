// src/AdminPage.jsx

import React from "react";
import AdminSongsManagement from "./AdminSongsManagement"; // MÖVCUD FAYL
import { Link } from "react-router-dom"; // Router-dən keçid

const AdminPage = () => {
  return (
    <div className="admin-router-wrapper">
      {/* Anasəhifəyə geri qayıtmaq üçün Link */}
      <Link to="/" className="toggle-view-btn">
        ← Mahnı Siyahısına Qayıt
      </Link>

      {/* Əsas admin paneli lojikası */}
      <AdminSongsManagement />
    </div>
  );
};

export default AdminPage;
