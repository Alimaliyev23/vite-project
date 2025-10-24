

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicPage from "./PublicPage"; 
import AdminPage from "./AdminPage"; 

function App() {
  return (
    <BrowserRouter>
      <div className="layout-wrapper">
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
