import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./redux/authSlice";

const CORRECT_USERNAME = "AlimAliyev";
const CORRECT_PASSWORD = "Alim1234";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
      dispatch(login());
      navigate("/admin", { replace: true });
    } else {
      setError(
        "Yanlış istifadəçi adı və ya şifrə. Zəhmət olmasa, yenidən cəhd edin."
      );
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login-container">
      <h2 className="section-title">🔒 Admin Girişi</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <p>
          Demo istifadəçi: <b>{CORRECT_USERNAME}</b> / <b>{CORRECT_PASSWORD}</b>
        </p>

        <input
          type="text"
          placeholder="İstifadəçi adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Şifrə"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="login-error-message">{error}</p>}

        <button type="submit" className="btn-login-submit">
          Daxil Ol
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
