import React from "react";
import "./LayoutBody.css";

import { Switch, Route } from "react-router-dom";
import AppLegal from "../routes/AppLegal";
import AppHome from "../routes/AppHome";
import AppStock from "../routes/AppStock";
import AppStockNew from "../routes/AppStockNew";

function LayoutBody() {
  return (
    <main>
       <Switch>
          <Route path="/legal">
            <AppLegal />
          </Route>
          <Route path="/stock/new">
            <AppStockNew />
          </Route>
          <Route path="/stock">
            <AppStock />
          </Route>
          <Route path="/">
            <AppHome />
          </Route>
        </Switch>
    </main>
  );
}

export default LayoutBody;
