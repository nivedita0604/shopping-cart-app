import React from 'react';
import './App.css';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <div>
        <Home />
        <Checkout />
      </div>
      <div>
        <Category />
      </div>
    </div>
  );
}

export default App;
