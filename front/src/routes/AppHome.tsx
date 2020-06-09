import React from "react";
import { Link } from "react-router-dom";

import "./AppHome.css";

function AppHome() {
  return (
    <section className="jumbo">
      <h1>Bienvenue !</h1>
      <Link to="/stock">
        <button type="button">Voir les stocks</button>
      </Link>
    </section>
  );
}

export default AppHome;
