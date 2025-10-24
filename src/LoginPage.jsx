import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./redux/authSlice";

const CORRECT_PASSWORD = "admin";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password === CORRECT_PASSWORD) {
      dispatch(login());
      navigate("/admin", { replace: true });
    } else {
      setError("Yanlış şifrə. Zəhmət olmasa, yenidən cəhd edin.");
      setPassword("");
    }
  };

  return (
    <div className="login-container">
      <h2 className="section-title">🔒 Admin Girişi</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <p>
          Demo şifrəsi: <b>{CORRECT_PASSWORD}</b>
        </p>

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
