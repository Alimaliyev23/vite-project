// src/PublicPage.jsx

import React from "react";
import SongsList from "./SongsList"; // MÖVCUD FAYL
import FavoriteList from "./FavoriteList"; // MÖVCUD FAYL
import { Link } from "react-router-dom"; // Router-dən keçid

const PublicPage = () => {
  return (
    <>
      {/* Bu hissə köhnə App.jsx layoutudur */}
      <div className="songs-section">
        <SongsList />

        {/* Admin panelə keçid üçün Link */}
        <Link to="/admin" className="go-to-admin-btn">
          Admin Panelə Keç →
        </Link>
      </div>
      <div className="favorites-section">
        <FavoriteList />
      </div>
    </>
  );
};

export default PublicPage;
