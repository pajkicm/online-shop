import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = productsData?.products?.data?.items.find((item) => item.id === id);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-details">
      <img
        src={product.images?.[0] || 'https://via.placeholder.com/640x360?text=No+Image'}
        alt={product.name}
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div dangerouslySetInnerHTML={{ __html: product.features }} />
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
