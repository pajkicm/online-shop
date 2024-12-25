import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

function ProductList({ addToCart, searchQuery = '', selectedCategory = 'all' }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const items = productsData?.products?.data?.items || [];
    setProducts(items);
    setFilteredProducts(items);
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const name = product?.name?.toLowerCase() || '';
      const description = product?.description?.toLowerCase() || '';
      const category = product?.category || 'all';

      const matchesCategory =
        selectedCategory === 'all' || category === selectedCategory;

      const matchesSearch =
        name.includes(searchQuery.toLowerCase()) ||
        description.includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, products]);

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.images?.[0] || 'https://via.placeholder.com/640x360?text=No+Image'}
                alt={product.name || 'Unnamed Product'}
              />
              <h2>{product.name || 'Unnamed Product'}</h2>
            </Link>
            <p className="price">${product.price}</p>
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
