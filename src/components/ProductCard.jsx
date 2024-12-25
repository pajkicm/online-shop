import React from 'react';

function ProductCard({ product, addToCart }) {
  const defaultImage = 'https://via.placeholder.com/640x360?text=No+Image';

  const imageUrl = product.images && product.images.length > 0 ? product.images[0] : defaultImage;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div dangerouslySetInnerHTML={{ __html: product.features }} />
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
