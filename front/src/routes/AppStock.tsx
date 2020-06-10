import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRedo, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./AppStock.scss";
import ArticleContext from "../contexts/ArticleContext";
import { Article } from "../interfaces/Article";
import TableRow from "../widget/TableRow";

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

  function remove() {
    console.log("remove");
    af.remove(selectedArticles);
    setSelectedArticles([]);
  }

  function refresh() {
    console.log("refresh");
    af.refresh();
  }

  return (
    <section className="stock">
      <h1>Liste d'articles</h1>
      <div className="buttons">
        <button onClick={refresh}>
          <FontAwesomeIcon icon={faRedo} />
        </button>
        <Link to="/stock/new">
          <button>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </Link>
        {selectedArticles.length > 0 && (
          <button onClick={remove}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        )}
      </div>
      {af.articles.length > 0 ? (
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
              <TableRow
                key={a.id}
                a={a}
                onClick={toggleSelect(a)}
                selectedArticles={selectedArticles}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div>Pas d'article</div>
      )}
      {/* {JSON.stringify(selectedArticles)} */}
    </section>
  );
}

export default AppStock;
