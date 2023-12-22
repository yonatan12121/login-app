// Navbar.js

import React from 'react';

const Navbar = ({ setSelectedCategory }) => {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '1rem' }}>
      <h1>My E-commerce Site</h1>
      <ul style={{ listStyle: 'none', display: 'flex' }}>
        <li style={{ marginRight: '20px' }}>
          <button onClick={() => handleCategoryClick('Electronics')} style={{ color: '#fff', textDecoration: 'none', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>Electronics</button>
        </li>
        <li style={{ marginRight: '20px' }}>
          <button onClick={() => handleCategoryClick('Clothing')} style={{ color: '#fff', textDecoration: 'none', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>Clothing</button>
        </li>
        <li style={{ marginRight: '20px' }}>
          <button onClick={() => handleCategoryClick('Shoes')} style={{ color: '#fff', textDecoration: 'none', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>Shoes</button>
        </li>
        <li style={{ marginRight: '20px' }}>
          <button onClick={() => handleCategoryClick('Hats')} style={{ color: '#fff', textDecoration: 'none', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>Hats</button>
        </li>
        <li>
          <button onClick={() => handleCategoryClick('Glasses')} style={{ color: '#fff', textDecoration: 'none', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>Glasses</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
