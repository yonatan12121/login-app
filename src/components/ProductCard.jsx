// ProductCard.js

import React from 'react';

const ProductCard = ({ product }) => {
  const { title, image, price, description, category } = product;

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', margin: '10px', padding: '10px', width: '250px' }}>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{title}</h3>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <p>{description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
