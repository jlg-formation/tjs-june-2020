import React from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";
import "./LayoutHeader.css";

function LayoutHeader() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo Gestion de stock" />
        <span>Gestion de stock</span>
      </Link>
    </header>
  );
}

export default LayoutHeader;
