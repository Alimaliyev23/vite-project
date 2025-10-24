// src/App.jsx - YENİLƏNMİŞ

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicPage from "./PublicPage";
import AdminPage from "./AdminPage";
import LoginPage from "./LoginPage";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="layout-wrapper">
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
