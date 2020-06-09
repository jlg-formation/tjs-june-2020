import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import "./AppStockNew.scss";
import { Article } from "../interfaces/Article";

function AppStockNew() {
  const { register, handleSubmit, /* watch, */ errors } = useForm<Article>();
  const history = useHistory();

  const onSubmit = (article: Article) => {
    console.log(article);
    history.push("/stock");
  };

  // console.log(watch("name"));
  // console.log(watch("price"));
  // console.log(watch("qty"));

  return (
    <section className="stock-new">
      <h1>Ajouter un article</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <div>Nom</div>
          <input
            type="text"
            name="name"
            defaultValue="Tournevis"
            ref={register({ required: true })}
          />
          <div className="error">
            {errors.name && <span>Oups... Nom obligatoire</span>}{" "}
          </div>
        </label>
        <label>
          <div>Prix</div>
          <input
            type="number"
            name="price"
            step="0.01"
            defaultValue="12.33"
            ref={register({ required: true })}
          />
          <div className="error">
            {errors.price && <span>Oups... Prix obligatoire</span>}{" "}
          </div>
        </label>
        <label>
          <div>Quantité</div>
          <input
            type="number"
            name="qty"
            defaultValue="110"
            ref={register({ required: true })}
          />
          <div className="error">
            {errors.qty && <span>Oups... Price obligatoire</span>}{" "}
          </div>
        </label>

        <button type="submit">Créer</button>
      </form>
    </section>
  );
}

export default AppStockNew;
