import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRedo } from "@fortawesome/free-solid-svg-icons";

import "./AppStock.scss";
import ArticleContext from "../contexts/ArticleContext";

function AppStock() {
  const af = useContext(ArticleContext);
  console.log("af: ", af);

  function toggleSelect(e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) {
    console.log("e: ", e);
    console.log("e.target: ", e.currentTarget);
    const row = e.currentTarget;
    const cl = row.classList;
    if (cl.contains("selected")) {
      cl.remove("selected");
      return;
    }
    cl.add("selected");
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
            <tr key={a.id} onClick={toggleSelect}>
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
