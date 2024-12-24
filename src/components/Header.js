import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
  return (
    <header className="header">
      <h1>Online Shop</h1>
      <nav>
        <Link to="/">Products</Link>
        <Link to="/checkout">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}

export default Header;
