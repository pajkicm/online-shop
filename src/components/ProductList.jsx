import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

function ProductList({ addToCart, searchQuery }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const items = productsData?.products?.data?.items || [];
    setProducts(items);
    setFilteredProducts(items); // Initially show all products
  }, []);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.images?.[0] || 'https://via.placeholder.com/640x360?text=No+Image'} alt={product.name} />
              <h2>{product.name}</h2>
            </Link>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}

export default ProductList;
