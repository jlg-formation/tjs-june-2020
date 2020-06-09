import React, { useState } from "react";
import "./AppStockNew.scss";

function AppStockNew() {
  const [name, setName] = useState("Tournevis");
  const [price, setPrice] = useState(12.23);
  const [qty, setQty] = useState(110);

  return (
    <section className="stock-new">
      <h1>Ajouter un article</h1>
      <form>
        <label>
          <div>Nom</div>
          <input type="text" onInput={(e) => setName(e.currentTarget.value)} />
        </label>
        <label>
          <div>Prix</div>
          <input type="number" onInput={(e) => setPrice(+e.currentTarget.value)} />
        </label>
        <label>
          <div>Quantité</div>
          <input type="number" onInput={(e) => setQty(+e.currentTarget.value)} />
        </label>
        <button type="submit">Créer</button>
      </form>
      {JSON.stringify({ name, price, qty })}
    </section>
  );
}

export default AppStockNew;
