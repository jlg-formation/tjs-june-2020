import React from "react";
import logo from "../logo.svg";
import "./LayoutHeader.css";

function LayoutHeader() {
  return (
    <header>
      <a href="/">
        <img src={logo} alt="Logo Gestion de stock" />
        <span>Gestion de stock</span>
      </a>
    </header>
  );
}

export default LayoutHeader;
