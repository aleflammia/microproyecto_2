import React from "react";
import "./navbar.css";
import logo from "../imagenes/cine.png";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../globalState";
import { firebaseAuth } from "../firebase/client";
import { RiUserLine, RiLogoutBoxLine, RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useGlobalState("user");

  return (
    <nav>
      <div className="nav-left">
        <img className="nav-logo" onClick={() => navigate("/")} alt="Logo" src={logo} />
        <button className="nav-menu-icon">
          <RiMenuLine />
        </button>
      </div>
      <div className="nav-right">
        {user ? (
          <>
            <button className="nav-button" onClick={() => navigate("/profile")}>
              <RiUserLine className="nav-icon" />
              Ver mi perfil
            </button>
            <button className="nav-button" onClick={() => firebaseAuth.signOut()}>
              <RiLogoutBoxLine className="nav-icon" />
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <button className="nav-button" onClick={() => navigate("/signup")}>
              Registrarse
            </button>
            <button className="nav-button" onClick={() => navigate("/login")}>
              Iniciar sesión
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
