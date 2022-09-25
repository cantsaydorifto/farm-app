import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartState from './context/cart/CartState';
import ProductState from './context/product/ProductState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductState>
    <CartState>
      <App />
    </CartState>
  </ProductState>
);