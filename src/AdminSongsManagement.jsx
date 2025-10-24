// src/AdminSongsManagement.jsx - TƏMİZLƏNMİŞ

import React, { useState, useEffect } from "react";
import { getSongs, deleteSong, createSong, updateSong } from "./api";

const AdminSongsManagement = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    id: null,
    SongName: "",
    Name: "",
    Genre: "",
  });

  const fetchSongs = async () => {
    try {
      setLoading(true);
      const data = await getSongs();
      setSongs(data);
      setError(null);
    } catch (err) {
      setError(err.message || "Məlumat yüklənmədi.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        await updateSong(formData.id, formData);
        setSongs(songs.map((s) => (s.id === formData.id ? formData : s)));
      } else {
        const newSong = await createSong(formData);
        setSongs([...songs, newSong]);
      }
      setFormData({ id: null, SongName: "", Name: "", Genre: "" });
    } catch (err) {
      setError(err.message || "Əməliyyat uğursuz oldu.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bu mahnını silməyə əminsiniz?")) return;
    try {
      await deleteSong(id);
      setSongs(songs.filter((song) => song.id !== id));
    } catch (err) {
      setError(err.message || "Silinmə zamanı xəta baş verdi.");
    }
  };

  const handleEditClick = (song) => {
    setFormData(song);
  };

  if (loading)
    return <div className="admin-status">Məlumatlar yüklənir...</div>;
  if (error) return <div className="admin-error">Xəta: {error}</div>;

  return (
    <div className="admin-management-container">
      <h2 className="section-title">Admin İdarəetmə Paneli</h2>

      <form onSubmit={handleSubmit} className="admin-form">
        <h3>{formData.id ? "Mahnını Redaktə Et" : "Yeni Mahnı Əlavə Et"}</h3>

        <input
          type="text"
          name="SongName"
          placeholder="Mahnı Adı"
          value={formData.SongName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Name"
          placeholder="İfaçı Adı"
          value={formData.Name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Genre"
          placeholder="Janr"
          value={formData.Genre}
          onChange={handleChange}
          required
        />

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            {formData.id ? "Yenilə" : "Əlavə Et"}
          </button>

          {formData.id && (
            <button
              type="button"
              className="btn-cancel"
              onClick={() =>
                setFormData({ id: null, SongName: "", Name: "", Genre: "" })
              }
            >
              Ləğv Et
            </button>
          )}
        </div>
      </form>

      <h3 style={{ marginTop: "30px" }}>Mövcud Mahnılar</h3>
      <div className="admin-table-wrapper">
        <table className="admin-song-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Mahnı Adı</th>
              <th>İfaçı</th>
              <th>Janr</th>
              <th>Əməliyyatlar</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <tr key={song.id}>
                <td>{song.id}</td>
                <td>{song.SongName}</td>
                <td>{song.Name}</td>
                <td>{song.Genre}</td>
                <td className="admin-actions">
                  <button
                    className="btn-edit"
                    onClick={() => handleEditClick(song)}
                  >
                    Redaktə Et
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(song.id)}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSongsManagement;
