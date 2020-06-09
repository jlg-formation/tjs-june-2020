import React from "react";
import { Link } from "react-router-dom";

import "./LayoutFooter.css";

function LayoutFooter() {
  return (
    <footer>
      <Link to="/legal">
        <span>Mentions Légales</span>
      </Link>
    </footer>
  );
}

export default LayoutFooter;
