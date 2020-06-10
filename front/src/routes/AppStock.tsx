import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRedo, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

import "./AppStock.scss";
import ArticleContext from "../contexts/ArticleContext";
import { Article } from "../interfaces/Article";

function AppStock() {
  const af = useContext(ArticleContext);

  const [selectedArticles, setSelectedArticles] = useState([] as Article[]);

  function toggleSelect(article: Article) {
    return () => {
      const newSelectedArticles = [...selectedArticles];
      if (newSelectedArticles.includes(article)) {
        const index = newSelectedArticles.findIndex((a) => a === article);
        newSelectedArticles.splice(index, 1);
      } else {
        newSelectedArticles.push(article);
      }
      setSelectedArticles(newSelectedArticles);
      console.log("newSelectedArticles: ", newSelectedArticles);
    };
  }

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
        {selectedArticles.length > 0 && (
          <button>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        )}
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
          {af.articles.map((a) => (
            <tr
              key={a.id}
              onClick={toggleSelect(a)}
              className={classNames({ selected: selectedArticles.includes(a) })}
            >
              <td>{a.name}</td>
              <td>{a.price} €</td>
              <td>{a.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {JSON.stringify(selectedArticles)} */}
    </section>
  );
}

export default AppStock;
