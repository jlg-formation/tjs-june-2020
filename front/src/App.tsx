import React from 'react';
import logo from './logo.svg';
import './App.css';
import LayoutHeader from './layout/LayoutHeader';
import LayoutBody from './layout/LayoutBody';
import LayoutFooter from './layout/LayoutFooter';

function App() {
  return (
    <div className="App">
      <LayoutHeader />
      <LayoutBody />
      <LayoutFooter />
    </div>
  );
}

export default App;
