import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRedo } from "@fortawesome/free-solid-svg-icons";

import "./AppStock.css";

function AppStock() {
  return (
    <section className="stock">
      <h1>Liste d'articles</h1>
      <div className="buttons">
        <button>
          <FontAwesomeIcon icon={faRedo} />
        </button>
        <Link to="/stock/new">
          <button>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tournevis</td>
            <td>1.23 €</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Tournevis</td>
            <td>1.23 €</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Tournevis</td>
            <td>1.23 €</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default AppStock;
