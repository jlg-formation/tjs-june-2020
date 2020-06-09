import React from "react";
import "./AppStockNew.scss";

function AppStockNew() {
  return (
    <section className="stock-new">
      <h1>Ajouter un article</h1>
      <form>
        <label>
          <div>Nom</div>
          <input type="text" />
        </label>
        <label>
          <div>Prix</div>
          <input type="number" />
        </label>
        <label>
          <div>Quantité</div>
          <input type="number" />
        </label>
        <button type="submit">Créer</button>
      </form>
    </section>
  );
}

export default AppStockNew;
