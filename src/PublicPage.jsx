import React from "react";
import SongsList from "./SongsList"; 
import FavoriteList from "./FavoriteList";
import { Link } from "react-router-dom"; 

const PublicPage = () => {
  return (
    <>
      <div className="songs-section">
        <SongsList />
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
