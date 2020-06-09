import React, { useState, SyntheticEvent } from "react";
import "./AppStockNew.scss";

function AppStockNew() {
  const [article, setArticle] = useState({
    name: "Tournevis",
    price: 12.33,
    qty: 110,
  });

  function submit(e: SyntheticEvent) {
    e.preventDefault();
    console.log("submit: ", article);
  }

  function handleOnInput(e: SyntheticEvent<HTMLInputElement>) {
    const attrName = e.currentTarget.name;
    setArticle({
      ...article,
      [attrName]: e.currentTarget.value,
    });
  }

  return (
    <section className="stock-new">
      <h1>Ajouter un article</h1>
      <form onSubmit={submit}>
        <label>
          <div>Nom</div>
          <input type="text" name="name" onInput={handleOnInput} />
        </label>
        <label>
          <div>Prix</div>
          <input type="number" name="price" onInput={handleOnInput} />
        </label>
        <label>
          <div>Quantité</div>
          <input type="number" name="qty" onInput={handleOnInput} />
        </label>
        <button type="submit">Créer</button>
      </form>
      {JSON.stringify(article)}
    </section>
  );
}

export default AppStockNew;
