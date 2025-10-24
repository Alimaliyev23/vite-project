// src/FavoriteList.jsx - TƏMİZLƏNMİŞ

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorit } from "./redux/favoriteSlice";

const FavoriteList = () => {
  const favorites = useSelector((state) => state.favorit.value);
  const dispatch = useDispatch();

  return (
    <div className="favorites-container">
      <h2 className="section-title">❤️ Sevimli Mahnılar</h2>

      {favorites.length === 0 ? (
        <p className="empty-favorites-message">
          Hələ favoritə əlavə olunmuş mahnı yoxdur. Siyahıdan mahnı seçin!
        </p>
      ) : (
        <div className="favorite-grid-list">
          {favorites.map((song) => (
            <div className="favorite-card" key={song.id}>
              <div className="favorite-details">
                <p className="favorite-song-name">{song.SongName}</p>
                <p className="favorite-song-artist">İfaçı: {song.Name}</p>
              </div>
              <button
                className="remove-from-favorite-btn"
                onClick={() => dispatch(removeFromFavorit(song.id))}
              >
                Sil 🗑️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteList;
