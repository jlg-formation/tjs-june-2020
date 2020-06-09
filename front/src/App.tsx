import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import LayoutHeader from "./layout/LayoutHeader";
import LayoutBody from "./layout/LayoutBody";
import LayoutFooter from "./layout/LayoutFooter";

function App() {
  return (
    <Router>
      <div className="App">
        <LayoutHeader />
        <LayoutBody />
        <LayoutFooter />
      </div>
    </Router>
  );
}

export default App;
