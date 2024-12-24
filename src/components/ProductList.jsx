import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const items = productsData?.products?.data?.items || [];
    setProducts(items);
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.images?.[0] || 'https://via.placeholder.com/640x360?text=No+Image'} alt={product.name} />
            <h2>{product.name}</h2>
          </Link>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
