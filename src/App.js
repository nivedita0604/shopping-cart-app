import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import { CartProvider } from './utility/cart.context';

function App() {
  return (
    <CartProvider>
      <Container>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/category/:id">
            <Category />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
        </Switch>
      </Container>
    </CartProvider>
  );
}

export default App;
