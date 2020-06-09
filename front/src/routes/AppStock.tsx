import React from "react";
import "./AppStock.css";

function AppStock() {
  return (
    <section className="stock">
      <h1>Liste d'articles</h1>
      <table>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
          <th>Quantité</th>
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
        <tr>
          <td>Tournevis</td>
          <td>1.23 €</td>
          <td>100</td>
        </tr>
      </table>
    </section>
  );
}

export default AppStock;
