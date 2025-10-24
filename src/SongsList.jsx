// src/SongsList.jsx - OPTİMALLAŞDIRILMIŞ VƏ TƏMİZLƏNMİŞ

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoFavorit } from "./redux/favoriteSlice";
import { getSongs } from "./api"; // Yeni import: api.js-dən gəlir

function SongsList() {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Hamısı");
  const [sortOption, setSortOption] = useState("none");
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorit.value);

  useEffect(() => {
    const fetchInitialSongs = async () => {
      try {
        setLoading(true);
        const data = await getSongs(); // api.js funksiyasından istifadə
        setSongs(data);

        const uniqueGenres = Array.from(
          new Set(data.map((song) => song.Genre))
        ).filter((g) => g && g.trim() !== "");
        setGenres(uniqueGenres);

        setError(null);
      } catch (err) {
        setError(err.message || "Məlumat çəkilmədi.");
      } finally {
        setLoading(false);
      }
    };
    fetchInitialSongs();
  }, []);

  const filteredSongs = songs.filter(
    (song) =>
      song.SongName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.Name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const genreFilteredSongs = filteredSongs.filter(
    (song) => selectedGenre === "Hamısı" || song.Genre === selectedGenre
  );

  const sortedSongs = [...genreFilteredSongs].sort((a, b) => {
    if (sortOption === "name") {
      return a.SongName.localeCompare(b.SongName);
    } else if (sortOption === "artist") {
      return a.Name.localeCompare(b.Name);
    }
    return 0;
  });

  if (loading) {
    return <div className="loading-message">Mahnılar yüklənir...</div>;
  }
  if (error) {
    return <div className="error-message">Xəta: {error}</div>;
  }

  return (
    <div className="song-list-container">
      <h2 className="section-title">🎵 Mahnılar Siyahısı</h2>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Mahnı və ya ifaçı axtar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="Hamısı">🎼 Bütün janrlar</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="none">🔀 Sıralama yoxdur</option>
          <option value="name">Ada görə (A-Z)</option>
          <option value="artist">İfaçıya görə (A-Z)</option>
        </select>
      </div>

      {sortedSongs.length === 0 ? (
        <p className="no-results">Axtarışa uyğun mahnı tapılmadı.</p>
      ) : (
        <div className="song-grid">
          {sortedSongs.map((song) => {
            const isFavorite = favorites.some((item) => item.id === song.id);
            return (
              <div key={song.id} className="song-card">
                <h3 className="song-genre">{song.Genre || "Naməlum Janr"}</h3>
                <p className="song-name">{song.SongName}</p>
                <p className="song-artist">İfaçı: {song.Name}</p>
                <button
                  onClick={() => {
                    if (!isFavorite) dispatch(addtoFavorit(song));
                  }}
                  disabled={isFavorite}
                  className={
                    isFavorite ? "btn-favorite-disabled" : "btn-favorite"
                  }
                >
                  {isFavorite ? "✅ Favoritdədir" : "❤️ Favoritə əlavə et"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SongsList;
