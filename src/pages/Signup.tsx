import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../firebase/client";
import { FaGoogle } from "react-icons/fa";
const Signup = () => {
  const navigate = useNavigate()
  const [errMsg, setErrMsg] = useState("")

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e: any) {
    e.preventDefault()
    setErrMsg("")

    if (!email.length || !password.length) {
      return
    }

    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
      navigate("/")
    } catch(e: any) {
      setErrMsg(e.message)
      setEmail("")
      setPassword("")
    }
  }

  async function handleGoogleSignin() {
    setErrMsg("")
    try {
      await signInWithPopup(firebaseAuth, new GoogleAuthProvider())
      navigate("/")
    } catch(e: any) {
      setErrMsg(e.message)
    }
  }

  return (
    <div className="form">
      <div className="contenedor">
        <header className="header">
          <h1>REGISTRO DE USUARIO</h1>
        </header>
        <form onSubmit={handleSubmit} className="input-contenedor">
          <input onChange={e => setEmail(e.target.value)} value={email} type="text" name="name" placeholder="Ingresa tu correo" />
          <input onChange={e => setPassword(e.target.value)} value={password} type="password" name="name" placeholder="Ingresa tu contraseña" />
          <button onClick={handleGoogleSignin} type="button"><FaGoogle/></button>
          <small style={{color: "red"}}>{errMsg}</small>
          <button type="submit">Registrarme</button>
        </form>
        <footer>
          <p>
            ¿Ya tienes cuenta?{" "}
            <Link className="link" to="/login">
              Inicia Sesion
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Signup;
