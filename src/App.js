import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Header from './components/Header';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Load cart from localStorage when the app starts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === productId);
      if (index !== -1) {
        const updatedCart = [...prevCart];
        updatedCart.splice(index, 1); // Remove one instance
        return updatedCart;
      }
      return prevCart;
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="App">
        <Header cartCount={cart.length} handleSearch={handleSearch} />
        <main>
          <Routes>
            <Route
              path="/"
              element={<ProductList addToCart={addToCart} searchQuery={searchQuery} />}
            />
            <Route
              path="/product/:id"
              element={<ProductDetails addToCart={addToCart} />}
            />
            <Route
              path="/checkout"
              element={<Checkout cart={cart} removeFromCart={removeFromCart} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
