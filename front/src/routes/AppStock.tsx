import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRedo } from "@fortawesome/free-solid-svg-icons";

import "./AppStock.css";
import ArticleContext from "../contexts/ArticleContext";

function AppStock() {
  const articles = useContext(ArticleContext);
  console.log("articles: ", articles);

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
          {articles.map((a) => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.price} €</td>
              <td>{a.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default AppStock;
