import React from "react";
import "./footer.css";
import logo from "../imagenes/cine.png";

const Footer = () => {
  return (
    <footer>
      <img width="150" src={logo} />
      <div>
        Cine UNIMET || Todos los
        derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
