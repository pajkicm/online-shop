import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount, handleSearch }) {
  return (
    <header className="header">
      <h1>Online Shop</h1>
      <nav>
        <Link to="/">Products</Link>
        <Link to="/checkout">Cart ({cartCount})</Link>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </header>
  );
}

export default Header;
