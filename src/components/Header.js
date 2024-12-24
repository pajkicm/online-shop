import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount, handleSearch, handleCategoryChange, selectedCategory }) {
  return (
    <header className="header">
      <h1>Online Shop</h1>
      <nav>
        <Link to="/">Products</Link>
        <Link to="/checkout">Cart ({cartCount})</Link>
      </nav>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search for products..."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="accessories">Accessories</option>
          <option value="apparel">Apparel</option>
          <option value="bags">Bags</option>
          <option value="drinkware">Drinkware</option>
          <option value="office">Office</option>
          <option value="shop by brand">Shop by brand</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
