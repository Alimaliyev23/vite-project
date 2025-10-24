// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicPage from "./PublicPage"; // Yeni Səhifə 1
import AdminPage from "./AdminPage"; // Yeni Səhifə 2

function App() {
  return (
    // Bütün tətbiqi Router ilə əhatə edirik
    <BrowserRouter>
      {/* Layout-un xarici div-i */}
      <div className="layout-wrapper">
        <Routes>
          {/* 1. Anasəhifə - Mahnı Siyahısı və Favoritlər */}
          <Route path="/" element={<PublicPage />} />

          {/* 2. Admin Paneli */}
          <Route path="/admin" element={<AdminPage />} />

          {/* Opsional: Əgər istifadəçi yanlış URL yazsa, əsas səhifəyə yönləndir */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
