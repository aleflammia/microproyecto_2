import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "../firebase/client";
import { FaGoogle } from "react-icons/fa";
import { RiUserLine, RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setErrMsg("");

    if (!email.length || !password.length) {
      return;
    }

    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/");
    } catch (e: any) {
      setErrMsg(e.message);
      setEmail("");
      setPassword("");
    }
  }

  async function handleGoogleSignin() {
    setErrMsg("");
    try {
      await signInWithPopup(firebaseAuth, new GoogleAuthProvider());
      navigate("/");
    } catch (e: any) {
      setErrMsg(e.message);
    }
  }

  return (
    <div className="form">
      <div className="contenedor">
        <header className="header">
          <h1>Inicio de sesión</h1>
        </header>
        <form onSubmit={handleSubmit} className="input-contenedor">
          <div className="input-wrapper">
            <RiUserLine className="input-icon" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Ingresa tu correo"
            />
          </div>
          <div className="input-wrapper">
            <RiLockPasswordLine className="input-icon" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <button onClick={handleGoogleSignin} type="button" className="google-button">
            <FaGoogle className="google-icon" />
            Iniciar sesión con Google
          </button>
          <small className="error-msg">{errMsg}</small>
          <button type="submit" className="submit-button">
            Iniciar sesión
          </button>
        </form>
        <footer>
          <p>
            ¿No tienes cuenta?{" "}
            <Link className="link" to="/signup">
              Regístrate
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
